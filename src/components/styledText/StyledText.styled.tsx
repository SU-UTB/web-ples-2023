import styled from "styled-components";
import theme from "../../theme/theme";

export const TextWrapper = styled.span`
  font-size: ${theme.fontSizeElements.paragraphGteTablet}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;
