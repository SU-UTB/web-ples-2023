import styled from 'styled-components';
import theme from '../theme/theme';

export const WrapperReservation = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  overflow-y: scroll;
  padding-top: 0.5em;

  background: linear-gradient(
    to bottom,
    ${theme.colors.dark},
    #4056b7,
    #b3cef2
  );
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: 0 auto;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem 0;
  text-align: center;
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

export const ColoredSeats = styled.div``;
