import styled, { css } from 'styled-components';
import theme from '../theme/theme';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

export const FormInput = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 1em;
  width: 20em;
`;

export const ButtonSubmit = styled.button`
  padding: 0.5rem;
  font-family: ${theme.fonts.monsterRegular};
  font-weight: bold;
  border: 1px solid black;
  border-radius: 1em;
  background-color: lightblue;
  cursor: pointer;
`;

export const FormSelect = styled.select`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 1em;
  width: 21em;
`;

export const FormSelectOption = styled.option`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 1em;
  width: 20em;
`;

export const FormError = styled.p`
  margin-bottom: 0.5rem;
  width: 20em;
`;

export const LoadingBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  visibility: visible;
  opacity: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-transition: 1s all;
  -o-transition: 1s all;
  transition: 1s all;
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;

  background: linear-gradient(
    to bottom,
    ${theme.colors.dark},
    #4056b7,
    #b3cef2
  );
`;

export const WrapperReservation = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: 0 auto;
`;

export const ReservationHeadline = styled.div`
  color: white;
  margin-bottom: 0.5em;

  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h1}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.h2}px;
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.h3}px;
  }
`;

export const WhiteText = styled.div`
  color: white;
  margin-right: 1em;

  font-family: ${theme.fonts.monsterRegular};
  font-size: ${theme.fontSizeElements.h4}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.h5}px;
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const ButtonReservation = styled.button`
  padding: 0.2rem;
  font-family: ${theme.fonts.monsterRegular};
  font-weight: bold;
  font-size: 18px;
  width: 100px;
  border: 1px solid black;
  border-radius: 1em;
  background-color: lightblue;
  cursor: pointer;
`;

export const ButtonClearSelection = styled.button`
  padding: 0.5rem;
  font-family: ${theme.fonts.monsterRegular};
  font-weight: bold;
  border: 1px solid black;
  border-radius: 1em;
  background-color: orange;
  cursor: pointer;
`;

export const ColoredSeats = styled.a``;
