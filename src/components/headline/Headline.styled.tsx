import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div<{
  inverse?: boolean;
  align?: "left" | "center" | "right";
  card?: boolean;
}>(
  ({ inverse, align = "left", card }) => css`
    position: relative;
    max-width: 80%;
    margin-bottom: 0.5em;
    text-align: center;
    font-family: ${theme.fonts.heading};

    font-size: ${card
      ? `${theme.fontSizeElements.paragraphDesktop}px`
      : `${theme.fontSizeElements.h1}px`};

    color: ${inverse ? `${theme.colors.inverse}` : `${theme.colors.text}px`};

    ${card &&
    css`
      margin-bottom: 0.5em;
    `}
    ${align &&
    css`
      justify-content: ${align};
    `};

    @media screen and (${theme.breakpoints.tabletQuery}) {
      font-size: ${card
        ? `${theme.fontSizeElements.paragraphTablet}px`
        : `${theme.fontSizeElements.h2}px`};
    }
    @media screen and (${theme.breakpoints.mobileQuery}) {
      max-width: 90%;
      font-size: ${card
        ? `${theme.fontSizeElements.paragraphMobile}px`
        : `${theme.fontSizeElements.h3}px`};
    }
  `
);
