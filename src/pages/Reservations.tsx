import { useEffect, useState } from 'react';
import '../App.css';
import Fold from '../components/layout/Fold';
import {
  ButtonSubmit,
  FormInput,
  FormWrapper,
  LoadingBackground,
  ReservationHeadline,
  WrapperReservation,
} from './Reservations.styled';
import axios from 'axios';

interface FormData {
  email: string;
  password: string;
}

const initialData: FormData = {
  email: '',
  password: '',
};

const Reservations = () => {
  const [formData, setFormData] = useState(initialData);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    console.log(`token: ${localStorage.getItem('token')}`);
    if (
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('token') !== null
    ) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = () => {
    axios({
      method: 'post',
      url: `http://sdtest.wz.cz/index.php/api/login`,
      data: {
        email: `${formData.email}`,
        password: `${formData.password}`,
      },
    }).then(
      (response) => {
        console.log(response.data.token);
        localStorage.setItem('token', `${response.data.token}`);
        setLoggedIn(true);
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

  return (
    <LoadingBackground>
      <WrapperReservation>
        <Fold />
        <ReservationHeadline>Rezervace</ReservationHeadline>
        {!loggedIn ? (
          <>
            <ReservationHeadline>Přihlášení</ReservationHeadline>
            <FormWrapper onSubmit={handleSubmit}>
              <FormInput
                type='text'
                name='email'
                value={formData.email}
                placeholder='Email'
                onChange={handleChange}
              />
              <FormInput
                type='text'
                name='password'
                value={formData.password}
                placeholder='Password'
                onChange={handleChange}
              />

              <ButtonSubmit type='submit'>Přihlásit se</ButtonSubmit>
            </FormWrapper>
          </>
        ) : (
          <>
            <ReservationHeadline>Přihlášen jako admin</ReservationHeadline>
            <FormWrapper>
              <ButtonSubmit onClick={() => logout()}>Odhlásit</ButtonSubmit>
            </FormWrapper>
          </>
        )}
      </WrapperReservation>
    </LoadingBackground>
  );
};

export default Reservations;
