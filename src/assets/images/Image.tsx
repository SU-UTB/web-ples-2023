import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const StyledImg = styled.img<{
  mirrored?: boolean;
}>(
  ({ mirrored }) => css`
    position: relative;
    max-width: 570px;
    max-height: 570px;
    align-self: center;

    ${mirrored &&
    css`
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    `}

    @media screen and (${theme.breakpoints.lteTabletQuery}) {
      width: 50%;
    }
  `
);
