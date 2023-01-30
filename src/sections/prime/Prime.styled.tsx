import styled from 'styled-components';
import theme from '../../theme/theme';

export const PrimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35em;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    padding-top: 27em;
  }
`;

export const PrimeHeadline = styled.span`
  max-width: 80%;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h1}px;

  color: ${theme.colors.primary};

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.h2}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    max-width: 90%;
    font-size: ${theme.fontSizeElements.h3}px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 3em;
  margin-top: 0.5em;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const Gap = styled.span`
  margin-left: 0.1em;
`;
