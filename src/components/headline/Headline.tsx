import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Headline = styled.span<{
  color?: "white" | "black" | "ice";
  align?: "left" | "center" | "right";
  card?: boolean;
}>(
  ({ color: colorMode = "white", align = "center", card }) => css`
    max-width: 80%;
    font-family: ${theme.fonts.heading};

    font-size: ${card
      ? `${theme.fontSizeElements.h4}px`
      : `${theme.fontSizeElements.h1}px`};

    color: ${colorMode === "ice" ? `${theme.colors.ice}` : `${colorMode}`};

    ${card &&
    css`
      margin-bottom: 0.5em;
    `}
    ${align &&
    css`
      text-align: ${align};
    `};

    @media screen and (${theme.breakpoints.tabletQuery}) {
      font-size: ${card
        ? `${theme.fontSizeElements.h5}px`
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
