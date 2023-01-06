import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const WrapperContact = styled.div`
  position: relative;
  margin-bottom: 2em;
`;

export const ContactWrapper = styled.div`
  margin-bottom: 2em;
`;

export const Row = styled.div`
  display: flex;
  gap: 2em;
  margin: 0 1em 0.7em 1em;
  line-height: 2em;
  font-size: ${theme.fontSizeElements.paragraphGteTablet}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  div:nth-child(1) {
    font-weight: bold;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  div:nth-child(1) {
    font-weight: bold;
  }
`;
