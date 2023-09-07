import { useEffect, useState } from 'react';
import '../../App.css';
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
} from './Reservations.styled';
import {
  showNotSelected,
  showSuccessReservation,
} from '../../sections/reservations/swalFunctions';
import MapID from '../../assets/images/reservations/MapID';
import Fold from '../../components/layout/Fold';
import Multiselect from 'multiselect-react-dropdown';
import { api } from '../../api/api';

interface LoginData {
  email: string;
  password: string;
}

const initialLoginData: LoginData = {
  email: '',
  password: '',
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
    },
  ];
  takenSeats: string;
}

const initialAllSeats: AllSeats = {
  availableStands: '',
  freeSeats: '',
  seats: [
    {
      id: '',
      alias: '',
      typ: '',
      rezervace: '',
    },
  ],
  takenSeats: '',
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
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('token') !== null
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

  const login = async () => {
    try {
      const response = await api.post('/login', {
        email: loginData.email,
        password: loginData.password,
      });
      localStorage.setItem('token', response.data.token);
      setLoggedIn(true);
      await getAllReservations();
      setLoginData(initialLoginData);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const getAllReservations = async () => {
    try {
      const response = await api.get('/pages/reservations', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      setAllSeats(response.data);

      setAllFreeSeats(
        response.data.seats.filter((seat: any) => seat.rezervace === null),
      );

      const takenSeats = response.data.seats
        .filter((item: any) => item.rezervace !== null)
        .map((item: any) => item.alias);

      const tables: { [key: string]: number } = {};
      takenSeats.forEach((takenSeat: any) => {
        const [table, seat] = takenSeat.split('/');
        tables[table] = (tables[table] || 0) + 1;
        const element = document.getElementById(takenSeat);
        if (element) {
          element.setAttribute('fill', 'red');
        }
      });

      // Fill red also full tables
      Object.keys(tables).forEach((table) => {
        if (parseInt(table) <= 115 || parseInt(table) >= 128) {
          if (tables[table] === 4) {
            const tableElement = document.getElementById(`${table}/S`);
            if (tableElement) {
              tableElement.setAttribute('fill', 'red');
            }
          }
        } else {
          if (tables[table] === 2) {
            const tableElement = document.getElementById(`${table}/S`);
            if (tableElement) {
              tableElement.setAttribute('fill', 'red');
            }
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // NEW RESERVATION
  const [selectedStand, setSelectedStand] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<Seats[]>();

  const handleSubmitNewReservation = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (selectedStand === 0 && (!selectedSeats || selectedSeats.length === 0)) {
      showNotSelected();
      return;
    }

    const seatsIds = selectedSeats?.map((seat) => seat.id);
    const formattedSeatsIds = seatsIds?.toString().replace(' ', '');

    try {
      const response = await api.post(
        '/reservations',
        {
          stand: `${selectedStand}`,
          seats: `[${formattedSeatsIds}]`,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );

      showSuccessReservation();
    } catch (error) {
      console.log(error);
    } finally {
      setSelectedSeats([]);
      setSelectedStand(0);
      await getAllReservations();
    }
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
                type="text"
                name="email"
                value={loginData.email}
                placeholder="Email"
                onChange={handleChangeLogin}
              />
              <FormInput
                type="text"
                name="password"
                value={loginData.password}
                placeholder="Password"
                onChange={handleChangeLogin}
              />

              <ButtonSubmit type="submit">Přihlásit se</ButtonSubmit>
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
                <FormInput type="text" value={selectedStand} readOnly />
              </label>
              <ButtonWrapper>
                <ButtonReservation
                  type="button"
                  onClick={handleIncrementStands}
                >
                  +
                </ButtonReservation>
                <ButtonReservation
                  type="button"
                  onClick={handleDecrementStands}
                >
                  -
                </ButtonReservation>
              </ButtonWrapper>
              <br />
              <br />
              <WhiteText>Místa na sezení</WhiteText>
              <Multiselect
                placeholder="Vyber místa k sezení"
                hidePlaceholder
                options={allFreeSeats}
                onSelect={setSelectedSeats}
                onRemove={setSelectedSeats}
                selectedValues={selectedSeats}
                style={{
                  inputField: {
                    color: 'white',
                    borderRadius: '20px !important',
                  },
                  searchBox: {
                    color: 'yellow',
                    maxWidth: '360px',
                  },
                  chips: {
                    background: '#171547',
                    color: 'white',
                    fontSize: '18px',
                    padding: '0.5em',
                  },
                  option: {
                    color: '#171547',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  },
                }}
                displayValue="alias"
              />
              <ButtonClearSelection
                type="button"
                onClick={handleRemoveAllSeats}
              >
                Smazat výběr
              </ButtonClearSelection>
              <br />
              <br />
              <ButtonSubmit type="submit">Koupit vstupenky</ButtonSubmit>
            </FormWrapper>
          </>
        )}
      </WrapperContent>
    </WrapperReservation>
  );
};

export default Reservations;
