import styled, { css } from "styled-components";
import theme from "../../../theme/theme";

export const Wrapper = styled.div<{
  inverse?: boolean;
}>(
  ({ inverse }) => css`
    font-family: ${theme.fonts.heading};
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 2em;
    font-size: ${theme.fontSizeElements.h3}px;
    color: ${inverse ? `${theme.colors.inverse}` : `${theme.colors.text}px`};

    @media screen and (${theme.breakpoints.tabletQuery}) {
      font-size: ${theme.fontSizeElements.h4}px;
    }
    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.h5}px;
    }
  `
);
