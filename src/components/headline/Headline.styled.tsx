import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div<{
  inverse?: boolean;
  align?: "left" | "center" | "right";
  card?: boolean;
}>(
  ({ inverse, align = "left", card }) => css`
    font-family: ${theme.fonts.heading};
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 2em;
    font-size: ${theme.fontSizeElements.h2}px;

    ${card &&
    css`
      font-size: ${theme.fontSizeElements.cardDesktop}px;
      margin-bottom: 0.5em;
    `}

    ${inverse &&
    css`
      color: white;
    `}

    ${align &&
    css`
      justify-content: ${align};
    `};

    @media screen and (${theme.breakpoints.tabletQuery}) {
      font-size: ${theme.fontSizeElements.h3}px;
      ${card &&
      css`
        font-size: ${theme.fontSizeElements.cardTablet}px;
      `}
    }
    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.h4}px;
      ${card &&
      css`
        font-size: ${theme.fontSizeElements.cardMobile}px;
      `}
    }
  `
);
