import styled from 'styled-components';
import theme from '../../../theme/theme';

export const CountdownWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  justify-content: center;
  border-radius: 10px;
  border: solid 2px ${theme.colors.primary};
  margin: 5em auto 15em;
  padding: 0.7em 1em;
  gap: 2.5em;

  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};

  @media screen and (${theme.breakpoints.mobileQuery}) {
    width: 180px;
    margin: 2em auto 7em;
    padding: 0.2em 0;
    gap: 1.5em;
  }
`;

export const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  line-height: 1.5;
  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.caption}px;
  }
`;

export const CountdownNumber = styled.div`
  font-size: ${theme.fontSizeElements.countdown}px;
  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.h2}px;
  }
`;
