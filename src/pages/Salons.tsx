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
  const [isLoading, setIsLoading] = useState(true);
  const [allMakers, setAllMakers] = useState(initialAllMakers);
  axios.defaults.baseURL = "http://localhost";

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
                  >
                    {allMakers.makers.map((m) => (
                      <option value={m.id} key={m.id}>
                        {" "}
                        {m.name}
                      </option>
                    ))}
                  </FormSelect>

                  <FormSelect id="exampleInputEmail1" placeholder="Vyber cas">
                    {
                      // I just love javascript, oh gawd this motherfookin cast shit...
                    }
                    {Array.from(
                      new Map(Object.entries(allMakers.availableTimes))
                    ).map((entry) => {
                      for (let i = 0; i < allMakers.makers.length; i++) {
                        if (entry[1].includes(allMakers.makers[i].id)) {
                          return (
                            <option value={entry[0]} key={entry[0]}>
                              {
                                // :))))
                              }
                              {entry[0].replace("00", ":00").replace("30",":30")}
                            </option>
                          );
                        }
                      }
                    })}
                  </FormSelect>

                  <FormSelect
                    id="exampleInputEmail1"
                    placeholder="Vyber sluzbu"
                  />
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
