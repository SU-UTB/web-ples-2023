import styled from "styled-components";
import theme from "../../theme/theme";

export const StyledImg = styled.img`
  position: relative;
  width: 100%;
  @media screen and (${theme.breakpoints.tabletQuery}) {
    width: 70%;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    width: 100%;
  }
`;
