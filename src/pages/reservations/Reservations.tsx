import { useEffect, useState } from "react";
import "../../App.css";
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
import {
  showNotSelected,
  showSuccessReservation,
} from "../../sections/reservations/swalFunctions";
import MapID from "../../assets/images/reservations/MapID";
import Fold from "../../components/layout/Fold";
import Multiselect from "multiselect-react-dropdown";

interface LoginData {
  email: string;
  password: string;
}

const initialLoginData: LoginData = {
  email: "",
  password: "",
};

// ALL SEATS
interface AllSeats {
  availableStands: string;
  freeSeats: string;
  seats: [
    {
      id: string;
      alias: string;
      typ: string;
      rezervace: string;
    }
  ];
  takenSeats: string;
}

const initialAllSeats: AllSeats = {
  availableStands: "",
  freeSeats: "",
  seats: [
    {
      id: "",
      alias: "",
      typ: "",
      rezervace: "",
    },
  ],
  takenSeats: "",
};

// MULTISELECT
interface Seats {
  name: string;
  id: string;
}

const Reservations = () => {
  const [loginData, setLoginData] = useState(initialLoginData);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [allSeats, setAllSeats] = useState(initialAllSeats);
  const [allFreeSeats, setAllFreeSeats] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("token") !== null
    ) {
      setLoggedIn(true);
      getAllReservations();
    }
  }, []);

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const login = () => {
    axios({
      method: "post",
      url: `https://rezervacesutb.wz.cz/index.php/api/login`,
      data: {
        email: `${loginData.email}`,
        password: `${loginData.password}`,
      },
    }).then(
      (response) => {
        localStorage.setItem("token", `${response.data.token}`);
        setLoggedIn(true);
        getAllReservations();
        setLoginData(initialLoginData);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const getAllReservations = () => {
    axios({
      method: "get",
      url: `https://rezervacesutb.wz.cz/index.php/api/pages/reservations`,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then(
      (response) => {
        setAllSeats(response.data);
        setAllFreeSeats(
          response.data.seats.filter((seat: any) => seat.rezervace === null)
        );

        const takenSeats = response.data.seats
          .filter((item: any) => item.rezervace !== null)
          .map((item: any) => item.alias);

        const tables = {};
        takenSeats.forEach((takenSeat: any) => {
          const [table, seat] = takenSeat.split("/");
          tables[table] = (tables[table] || 0) + 1;
          const element = document.getElementById(takenSeat);
          if (element) {
            element.setAttribute("fill", "red");
          }
        });

        // fill red also full tables
        Object.keys(tables).forEach((table) => {
          if (parseInt(table) <= 115 || parseInt(table) >= 128) {
            if (tables[table] === 4) {
              const tableElement = document.getElementById(`${table}/S`);
              if (tableElement) {
                tableElement.setAttribute("fill", "red");
              }
            }
          } else {
            if (tables[table] === 2) {
              const tableElement = document.getElementById(`${table}/S`);
              if (tableElement) {
                tableElement.setAttribute("fill", "red");
              }
            }
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // NEW RESERVATION
  const [selectedStand, setSelectedStand] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<Seats[]>();

  const handleSubmitNewReservation = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (selectedStand === 0 && (!selectedSeats || selectedSeats.length === 0)) {
      showNotSelected();
      return;
    }

    const seatsIds = selectedSeats?.map((seat) => seat.id);
    seatsIds?.toString().replace(" ", "");

    axios({
      method: "post",
      url: `https://rezervacesutb.wz.cz/index.php/api/reservations`,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      data: {
        stand: `${selectedStand}`,
        seats: `[${seatsIds}]`,
      },
    }).then(
      (response) => {
        setSelectedSeats([]);
        setSelectedStand(0);
        getAllReservations();
        showSuccessReservation();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleIncrementStands = () => {
    setSelectedStand(selectedStand + 1);
  };

  const handleDecrementStands = () => {
    if (selectedStand > 0) {
      setSelectedStand(selectedStand - 1);
    }
  };

  const handleRemoveAllSeats = () => {
    setSelectedSeats([]);
    setSelectedStand(0);
  };

  return (
    <WrapperReservation>
      <ColoredSeats>
        <MapID />
      </ColoredSeats>
      <WrapperContent>
        <Fold />
        {!loggedIn ? (
          <>
            <ReservationHeadline>Přihlášení</ReservationHeadline>
            <FormWrapper onSubmit={handleSubmitLogin}>
              <FormInput
                type='text'
                name='email'
                value={loginData.email}
                placeholder='Email'
                onChange={handleChangeLogin}
              />
              <FormInput
                type='text'
                name='password'
                value={loginData.password}
                placeholder='Password'
                onChange={handleChangeLogin}
              />

              <ButtonSubmit type='submit'>Přihlásit se</ButtonSubmit>
            </FormWrapper>
          </>
        ) : (
          <>
            <FormWrapper>
              <ButtonSubmit onClick={() => logout()}>Odhlásit</ButtonSubmit>
            </FormWrapper>
            <br />

            <WhiteText>
              Místa na stání: {allSeats.availableStands} / 434
            </WhiteText>
            <WhiteText>
              Místa na sezení: {allSeats.freeSeats} /{allSeats.seats.length}
            </WhiteText>
            <br />
            <br />
            <ReservationHeadline>Nová registrace</ReservationHeadline>
            <FormWrapper onSubmit={handleSubmitNewReservation}>
              <label>
                <WhiteText>Místa na stání:</WhiteText>
                <FormInput type='text' value={selectedStand} readOnly />
              </label>
              <ButtonWrapper>
                <ButtonReservation
                  type='button'
                  onClick={handleIncrementStands}
                >
                  +
                </ButtonReservation>
                <ButtonReservation
                  type='button'
                  onClick={handleDecrementStands}
                >
                  -
                </ButtonReservation>
              </ButtonWrapper>
              <br />
              <br />
              <WhiteText>Místa na sezení</WhiteText>
              <Multiselect
                placeholder='Vyber místa k sezení'
                hidePlaceholder
                options={allFreeSeats}
                onSelect={setSelectedSeats}
                onRemove={setSelectedSeats}
                selectedValues={selectedSeats}
                style={{
                  inputField: {
                    color: "white",
                    borderRadius: "20px !important",
                  },
                  searchBox: {
                    color: "yellow",
                    maxWidth: "360px",
                  },
                  chips: {
                    background: "#171547",
                    color: "white",
                    fontSize: "18px",
                    padding: "0.5em",
                  },
                  option: {
                    color: "#171547",
                    fontSize: "14px",
                    fontWeight: "bold",
                  },
                }}
                displayValue='alias'
              />
              <ButtonClearSelection
                type='button'
                onClick={handleRemoveAllSeats}
              >
                Smazat výběr
              </ButtonClearSelection>
              <br />
              <br />
              <ButtonSubmit type='submit'>Koupit vstupenky</ButtonSubmit>
            </FormWrapper>
          </>
        )}
      </WrapperContent>
    </WrapperReservation>
  );
};

export default Reservations;
