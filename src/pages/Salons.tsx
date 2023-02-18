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

const initialAllMakers: AllMakers = {
  makers: new Array<Maker>(),
  availableTimes: new Map<string, Array<number>>(),
  makerServices: new Array<MakerService>(),
};

const Salons = () => {
  //TODO
  axios.defaults.baseURL = "http://localhost";

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
    let id = Number.parseInt(e.target.value);

    onChangeTimes(id);
    onChangeServices(id);
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

  return (
    <WrapperReservation>
      <WrapperContent>
        <Fold />
        <>
          {isLoading ? (
            <br></br>
          ) : (
            <FormWrapper>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "50px" }}>
                  <FormSelect
                    id="exampleInputEmail1"
                    placeholder="Vyber makera"
                    onChange={onChangeMaker}
                  >
                    {allMakers.makers.map((m) => (
                      <option value={m.id} key={m.id}>
                        {" "}
                        {m.name}
                      </option>
                    ))}
                  </FormSelect>

                  <FormSelect id="exampleInputEmail1" placeholder="Vyber cas">
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
                    type="email"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />

                  <FormInput
                    type="email"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />

                  <FormInput
                    type="email"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div>
                <FormInput type="checkbox" id="exampleCheck1" />
                <br />
                <br />
                <ButtonSubmit type="submit">Make reservation</ButtonSubmit>
              </div>
            </FormWrapper>
          )}
        </>
      </WrapperContent>
    </WrapperReservation>
  );
};

export default Salons;
