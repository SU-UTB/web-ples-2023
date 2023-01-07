import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const WrapperTimeline = styled.div`
  position: relative;
  margin-bottom: 2em;
  color: ${theme.colors.primary};
`;

export const Row = styled.div`
  display: flex;
  gap: 2em;
  margin: 0 1em 0.7em 1em;
  font-size: ${theme.fontSizeElements.paragraphGteTablet}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const Time = styled.div`
  min-width: 4em;
  text-align: right;
`;

export const Activity = styled.div`
  text-align: left;
`;
