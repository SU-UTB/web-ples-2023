import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const WrapperTimeline = styled.div`
  position: relative;
  margin-bottom: 2em;
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

export const ProgramCard = styled.a`
  display: block;
  padding: 1em;
  margin: 1.5em;
  text-align: center;
  border-radius: 0.5em;
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    margin: 1em;
  }
  box-shadow: 0px 4px 4px 4px gray;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    margin: 1em;
  }
`;

export const CardText = styled.div`
  margin-bottom: 1em;
`;

export const CardImageWrapper = styled.img`
  width: 100%;
  border-radius: 0.5em;
`;
