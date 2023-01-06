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

    font-size: ${card
      ? `${theme.fontSizeElements.paragraphDesktop}px`
      : `${theme.fontSizeElements.h2}px`};

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
        : `${theme.fontSizeElements.h3}px`};
    }
    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${card
        ? `${theme.fontSizeElements.paragraphMobile}px`
        : `${theme.fontSizeElements.h4}px`};
    }
  `
);
