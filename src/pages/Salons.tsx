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
  availableTimes: Map<string, Array<string>>;
  makerServices: Array<MakerService>;
}

const initialAllMakers: AllMakers = {
  makers: new Array<Maker>(),
  availableTimes: new Map<string, Array<string>>(),
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
           
              <FormInput
                type="text"
                value={allMakers.makers[0].name}
                readOnly
              />
              <br />
              <br />
              <ButtonSubmit type="submit">Make reservation</ButtonSubmit>
            </FormWrapper>
          )}
        </>
      </WrapperContent>
    </WrapperReservation>
  );
};

export default Salons;
