import { useEffect, useState } from "react";
import "../../App.css";
import {
  LinkToMainPage,
  LinkWrapper,
  SalonsWrapper,
  FormWrapper,
  SalonsWrapperBg,
  FormCheckbox,
  SalonsConsent,
  FormSelect,
  RowWrapper,
  RowLabel as Label,
  Spacer,
  FormInput,
  FooterSU,
  ParagraphWrapper,
} from "./Salons.styled";
import {
  ButtonSubmit,
  ReservationHeadline,
} from "../reservations/Reservations.styled";
import { useNavigate } from "react-router-dom";
import Fold from "../../components/layout/Fold";
import axios, { all } from "axios";
import { showReservedMakerResponse } from "../../sections/reservations/swalFunctions";

interface Maker {
  id: number;
  name: string;
}

interface MakerService {
  maker_id: number;
  service: string;
}

interface AllMakers {
  makers: Array<Maker>;
  availableTimes: Map<string, Array<number>>;
  makerServices: Array<MakerService>;
}

interface MakerReservation {
  maker: number;
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}

const initialAllMakers: AllMakers = {
  makers: new Array<Maker>(),
  availableTimes: new Map<string, Array<number>>(),
  makerServices: new Array<MakerService>(),
};
const initialReservationData: MakerReservation = {
  maker: 0,
  name: "",
  phone: "",
  email: "",
  consent: false,
};

const Salons = () => {
  const navigate = useNavigate();
  const handleGoToMainpage = () => navigate("/");

  const [maker, setMaker] = useState(0);
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  //
  const [isLoading, setIsLoading] = useState(true);
  const [allMakers, setAllMakers] = useState(initialAllMakers);
  const [availableTimes, setAvailableTimes] = useState(new Array<string>());
  const [availableServices, setAvailableServices] = useState(
    new Array<string>()
  );

  useEffect(() => {
    getAllMakers();
  }, []);

  const getAllMakers = () => {
    axios({
      method: "get",
      url: `https://rezervacesutb.wz.cz/api/makers`,
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(
      (response) => {
        setAllMakers(response.data);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    setMaker(allMakers.makers[0]?.id ?? 0);
  }, [allMakers]);

  useEffect(() => {
    onChangeTimes();
    onChangeServices();
  }, [maker]);

  useEffect(() => {
    setTime(availableTimes[0]);
  }, [availableTimes]);

  useEffect(() => {
    setService(availableServices[0]);
  }, [availableServices]);

  const onChangeMaker = (e) => {
    const { name, value } = e.target;

    setMaker(value);
  };

  const onChangeTime = (e) => {
    const { name, value } = e.target;

    setTime(value);
  };
  const onChangeService = (e) => {
    const { name, value } = e.target;

    setService(value);
  };
  const onChangeName = (e) => {
    const { name, value } = e.target;

    setName(value);
  };
  const onChangePhone = (e) => {
    const { name, value } = e.target;

    setPhone(value);
  };
  const onChangeEmail = (e) => {
    const { name, value } = e.target;

    setEmail(value);
  };

  const onChangeConsent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setConsent(checked);
  };

  function onChangeTimes() {
    // I just love javascript, oh gawd this motherfookin cast shit...
    let availableMakerTimes = Array.from(
      new Map(Object.entries(allMakers.availableTimes))
    )
      .map((entry) => {
        if (entry[1].includes(Number.parseInt(maker.toString()))) {
          return entry[0];
        }
      })
      .filter((t) => t !== undefined);
    setAvailableTimes(availableMakerTimes as Array<string>);
  }
  function onChangeServices() {
    let availableServices = allMakers.makerServices
      .filter((ms) => ms.maker_id === Number.parseInt(maker.toString()))
      .map((ms) => ms.service);

    setAvailableServices(availableServices as Array<string>);
  }

  const handleSubmitReservation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createReservation();
  };

  const createReservation = () => {
    setIsLoading(true);
    //TODO validations
    axios({
      method: "post",
      url: `https://rezervacesutb.wz.cz/api/makers`,
      headers: {
        "Content-Type": "Application/json",
      },
      data: {
        maker: `${maker}`,
        time: `${time}`,
        service: `${service}`,
        name: `${name}`,
        phone: `${phone}`,
        email: `${email}`,
        consent: `${consent}`,
      },
    }).then(
      (response) => {
        setAllMakers(initialAllMakers);
        setName("");
        setEmail("");
        setPhone("");
        setConsent(false);
        getAllMakers();
        setIsLoading(false);
      },
      (error) => {
        //TODO
        if (error) {
          //TODO TADY VYPIS ERROR MESSAGE JEN PRI 400
        }
        console.log(error);
      }
    );
  };
  return (
    <SalonsWrapperBg>
      <SalonsWrapper>
        <Fold />
        {
          //TODO Info co se tady vubec rezrevuje , klidne nejakej nav s krokem zpet na main page\
          <LinkWrapper>
            <LinkToMainPage onClick={handleGoToMainpage}>
              Zpět na hlavní stránku
            </LinkToMainPage>
          </LinkWrapper>
        }
        <Spacer />
        <ReservationHeadline>
          Reprezentační ples UTB - rezervace salonu
        </ReservationHeadline>
        <ParagraphWrapper>
          V den D se dámy mohou přijít zkrášlit šikovnými kadeřnicemi a
          kosmetičkami za symbolickou částku.
        </ParagraphWrapper>
        <Spacer />
        <>
          {isLoading ? ( // revert logic
            <br></br>
          ) : (
            <FormWrapper onSubmit={handleSubmitReservation}>
              <RowWrapper>
                <Label>Obsluha</Label>
                <FormSelect
                  id="exampleInputEmail1"
                  placeholder="Vyber makera"
                  name="maker"
                  onChange={onChangeMaker}
                  value={maker}
                >
                  {allMakers.makers.map((m) => (
                    <option value={m.id} key={m.id}>
                      {m.name}
                    </option>
                  ))}
                </FormSelect>
              </RowWrapper>

              <RowWrapper>
                <Label>Čas rezervace</Label>
                <FormSelect
                  id="exampleInputEmail1"
                  placeholder="Vyber cas"
                  name="time"
                  onChange={onChangeTime}
                  value={time}
                >
                  {availableTimes.map((t) => (
                    <option value={t} key={t}>
                      {
                        // :))))
                      }
                      {t.replace("00", ":00").replace("30", ":30")}
                    </option>
                  ))}
                </FormSelect>
              </RowWrapper>

              <RowWrapper>
                <Label>Služba </Label>
                <FormSelect
                  id="exampleInputEmail1"
                  placeholder="Vyber sluzbu"
                  name="service"
                  onChange={onChangeService}
                  value={service}
                >
                  {availableServices.map((s) => (
                    <option value={s} key={s}>
                      {s}
                    </option>
                  ))}
                </FormSelect>
              </RowWrapper>

              <Spacer />

              <RowWrapper>
                <Label>Jméno</Label>
                <FormInput
                  type="text"
                  id="exampleInputEmail1"
                  placeholder="Jméno"
                  name="name"
                  onChange={onChangeName}
                  value={name}
                  required
                />
              </RowWrapper>

              <RowWrapper>
                <Label>Telefon</Label>
                <FormInput
                  type="phone"
                  id="exampleInputEmail1"
                  placeholder="Telefon"
                  name="phone"
                  onChange={onChangePhone}
                  value={phone}
                  required
                />
              </RowWrapper>

              <RowWrapper>
                <Label>Email</Label>
                <FormInput
                  type="email"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  name="email"
                  onChange={onChangeEmail}
                  value={email}
                  required
                />
              </RowWrapper>
              <Spacer />

              <SalonsConsent>
                Souhlasím se zpracováním osobních údajů
              </SalonsConsent>
              <FormCheckbox
                type="checkbox"
                id="exampleCheck1"
                name="consent"
                onChange={onChangeConsent}
                checked={consent}
                required
              />
              <Spacer />

              <ButtonSubmit type="submit">Vytvořit rezervaci</ButtonSubmit>
            </FormWrapper>
          )}
        </>
        <FooterSU>Rezervační systém SU UTB</FooterSU>
      </SalonsWrapper>
    </SalonsWrapperBg>
  );
};

export default Salons;
