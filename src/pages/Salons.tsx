import { useEffect, useState } from "react";
import "../App.css";
import {
  ButtonClearSelection,
  ButtonReservation,
  ButtonSubmit,
  ButtonWrapper,
  ColoredSeats,
  FormInput,
  FormWrapper,
  WrapperReservation,
  ReservationHeadline,
  WhiteText,
  WrapperContent,
  FormSelect,
} from "./Reservations.styled";
import axios from "axios";
import Fold from "../components/layout/Fold";

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
  //TODO
  axios.defaults.baseURL = "http://localhost";

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
      url: `/api/salons`,
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
  const onChangeConsent = (e) => {
    const { name, value } = e.target;

    setReservationData({ ...reservationData, [name]: e.target.checked });
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
      url: `/api/salons`,
      headers: {
        "Content-Type": "Application/json",
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
    <WrapperReservation>
      <WrapperContent>
        <Fold />
        {
          //TODO Info co se tady vubec rezrevuje , klidne nejakej nav s krokem zpet na main page
        }
        <WhiteText>Reprezentacni ples UTB - rezervace salonu</WhiteText>
        <>
          {isLoading ? (
            <br></br>
          ) : (
            <FormWrapper onSubmit={handleSubmitReservation}>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "50px" }}>
                  <FormSelect
                    id="exampleInputEmail1"
                    placeholder="Vyber makera"
                    name="maker"
                    onChange={onChangeMaker}
                  >
                    {allMakers.makers.map((m) => (
                      <option value={m.id} key={m.id}>
                        {" "}
                        {m.name}
                      </option>
                    ))}
                  </FormSelect>

                  <FormSelect
                    id="exampleInputEmail1"
                    placeholder="Vyber cas"
                    name="time"
                    onChange={onChangeTime}
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

                  <FormSelect
                    id="exampleInputEmail1"
                    placeholder="Vyber sluzbu"
                    name="service"
                    onChange={onChangeService}
                  >
                    {availableServices.map((s) => (
                      <option value={s} key={s}>
                        {s}
                      </option>
                    ))}
                  </FormSelect>
                </div>
                <div style={{ margin: "50px" }}>
                  <FormInput
                    type="text"
                    id="exampleInputEmail1"
                    placeholder="Enter name"
                    name="name"
                    onChange={onChangeName}
                  />

                  <FormInput
                    type="phone"
                    id="exampleInputEmail1"
                    placeholder="Enter phone"
                    name="phone"
                    onChange={onChangePhone}
                  />

                  <FormInput
                    type="email"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                    name="email"
                    onChange={onChangeEmail}
                  />
                </div>
              </div>
              <div>
                <FormInput
                  type="checkbox"
                  id="exampleCheck1"
                  onChange={onChangeConsent}
                  name="consent"
                />
                <br />
                <br />
                <ButtonSubmit type="submit">Make reservation</ButtonSubmit>
              </div>
            </FormWrapper>
          )}
        </>

        {
          //TODO nejakou listiku, zahlavi, cokoli kde to bude napsane, nasrat na UTBcko protoze je to nas system
        }
        <footer>
          <h1>Rezervacni system SU UTB</h1>
        </footer>
      </WrapperContent>
    </WrapperReservation>
  );
};

export default Salons;
