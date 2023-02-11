import { useEffect, useState } from 'react';
import '../App.css';
import Fold from '../components/layout/Fold';
import {
  ButtonClearSelection,
  ButtonReservation,
  ButtonSubmit,
  ButtonWrapper,
  FormInput,
  FormWrapper,
  LoadingBackground,
  ReservationHeadline,
  WhiteText,
  WrapperReservation,
} from './Reservations.styled';
import axios from 'axios';
import {
  showNotSelected,
  showSomethingGoneWrong,
} from '../sections/reservations/swalFunctions';
import MultiSelect from 'multiselect-react-dropdown';

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
    }
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

  const login = () => {
    axios({
      method: 'post',
      url: `http://sdtest.wz.cz/index.php/api/login`,
      data: {
        email: `${loginData.email}`,
        password: `${loginData.password}`,
      },
    }).then(
      (response) => {
        localStorage.setItem('token', `${response.data.token}`);
        setLoggedIn(true);
        getAllReservations();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const getAllReservations = () => {
    axios({
      method: 'get',
      url: `http://sdtest.wz.cz/index.php/api/pages/reservations`,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then(
      (response) => {
        console.log(response.data);
        setAllSeats(response.data);
        setAllFreeSeats(
          response.data.seats.filter((seat: any) => seat.rezervace === null)
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
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

    console.log(selectedStand);
    const seatsIds = selectedSeats?.map((seat) => seat.id);
    seatsIds?.toString().replace(' ', '');
    console.log(seatsIds);

    axios({
      method: 'post',
      url: `http://sdtest.wz.cz/index.php/api/reservations`,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: {
        stand: `${selectedStand}`,
        seats: `[${seatsIds}]`,
      },
    }).then(
      (response) => {
        console.log(response);
        console.log(response.data);
        setSelectedSeats([]);
        getAllReservations();
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
  };

  return (
    <LoadingBackground>
      <WrapperReservation>
        <Fold />
        <ReservationHeadline>Rezervace</ReservationHeadline>
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
            <WhiteText>Místa na stání: {allSeats.availableStands}</WhiteText>
            <WhiteText>
              Místa na sezení: {allSeats.freeSeats} /{allSeats.seats.length}
            </WhiteText>
            <FormWrapper>
              <ButtonSubmit onClick={() => logout()}>Odhlásit</ButtonSubmit>
            </FormWrapper>
            <ReservationHeadline>Nová registrace</ReservationHeadline>
            <FormWrapper onSubmit={handleSubmitNewReservation}>
              <label>
                <WhiteText>Místa na stání:</WhiteText>
                <FormInput type='text' value={selectedStand} />
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
              <MultiSelect
                placeholder='Vyber místa k sezení'
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
      </WrapperReservation>
    </LoadingBackground>
  );
};

export default Reservations;
