import styled, { css } from 'styled-components';
import theme from '../../../theme/theme';

export const StyledImgWrapper = styled.img<{
  mirrored?: boolean;
}>(
  ({ mirrored }) => css`
    position: relative;
    max-width: 570px;
    max-height: 570px;
    align-self: center;

    ${mirrored &&
    css`
      -webkit-transform: scaleX(-1) !important;
      transform: scaleX(-1) !important;
    `}

    @media screen and (${theme.breakpoints.lteTabletQuery}) {
      width: 50%;
    }
  `
);
