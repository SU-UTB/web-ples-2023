import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

export const WrapperTimeline = styled.div`
  position: relative;
  color: ${theme.colors.primary};
`;

export const Row = styled.div`
  display: flex;
  gap: 2em;
  margin: 0 1em 0.7em 1em;
  font-size: ${theme.fontSizeElements.h4}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    gap: 1em;
    margin: 0 0em 0.7em 0em;
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const Time = styled.div`
  min-width: 4em;
  text-align: right;
  font-weight: bold;
`;

export const Activity = styled.div`
  text-align: left;
`;
