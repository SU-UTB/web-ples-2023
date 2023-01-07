import styled from "styled-components";
import theme from "../../theme/theme";

export const StyledImg = styled.img`
  position: relative;
  max-width: 570px;
  max-height: 570px;
  align-self: center;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    width: 50%;
  }
`;
