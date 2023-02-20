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
import axios from "axios";

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
  time: string;
  service: string;
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
  time: "",
  service: "",
  name: "",
  phone: "",
  email: "",
  consent: false,
};

const Salons = () => {
  const navigate = useNavigate();
  const handleGoToMainpage = () => navigate("/");

  //TODO
  //axios.defaults.baseURL = "http://localhost";

  const [reservationData, setReservationData] = useState(
    initialReservationData
  );
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
      url: `https://cors-anywhere.herokuapp.com/http://sdtest.wz.cz/api/makers`,
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
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

  const onChangeMaker = (e) => {
    const { name, value } = e.target;

    let id = Number.parseInt(value);

    onChangeTimes(id);
    onChangeServices(id);

    setReservationData({ ...reservationData, [name]: value });
  };

  const onChangeTime = (e) => {
    const { name, value } = e.target;

    setReservationData({ ...reservationData, [name]: value });
  };
  const onChangeService = (e) => {
    const { name, value } = e.target;

    setReservationData({ ...reservationData, [name]: value });
  };
  const onChangeName = (e) => {
    const { name, value } = e.target;

    setReservationData({ ...reservationData, [name]: value });
  };
  const onChangePhone = (e) => {
    const { name, value } = e.target;

    setReservationData({ ...reservationData, [name]: value });
  };
  const onChangeEmail = (e) => {
    const { name, value } = e.target;

    setReservationData({ ...reservationData, [name]: value });
  };
  // const onChangeConsent = (e) => {
  //   const { name, value } = e.target;

  //   setReservationData({ ...reservationData, [name]: e.target.checked });
  // };

  const onChangeConsent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setReservationData({
      ...reservationData,
      consent: checked,
    });
  };

  function onChangeTimes(id: number) {
    // I just love javascript, oh gawd this motherfookin cast shit...
    let availableMakerTimes = Array.from(
      new Map(Object.entries(allMakers.availableTimes))
    )
      .map((entry) => {
        if (entry[1].includes(id)) {
          return entry[0];
        }
      })
      .filter((t) => t !== undefined);

    setAvailableTimes(availableMakerTimes as Array<string>);
  }
  function onChangeServices(id: number) {
    let availableServices = allMakers.makerServices
      .filter((ms) => ms.maker_id === id)
      .map((ms) => ms.service);

    setAvailableServices(availableServices as Array<string>);
  }

  const handleSubmitReservation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createReservation();
  };

  const createReservation = () => {
    setIsLoading(true);
    axios({
      method: "post",
      url: `https://cors-anywhere.herokuapp.com/http://sdtest.wz.cz/api/makers`,
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        maker: `${reservationData.maker}`,
        time: `${reservationData.time}`,
        service: `${reservationData.service}`,
        name: `${reservationData.name}`,
        phone: `${reservationData.phone}`,
        email: `${reservationData.email}`,
        consent: `${reservationData.consent}`,
      },
    }).then(
      (response) => {
        getAllMakers();
        setIsLoading(false);
      },
      (error) => {
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
                  value={reservationData.maker}
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
                  value={reservationData.time}
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
                  value={reservationData.service}
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
                  value={reservationData.name}
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
                  value={reservationData.phone}
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
                  value={reservationData.email}
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
                checked={reservationData.consent}
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
