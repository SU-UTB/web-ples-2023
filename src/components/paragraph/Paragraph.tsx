import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Paragraph = styled.p<{
  colorMode?: "white" | "black" | "ice";
  program?: boolean;
  event?: boolean;
}>(
  ({ colorMode = "white", program, event }) => css`
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
    text-align: justify;
    line-height: 1.5;

    color: ${colorMode === "ice" ? `${theme.colors.ice}` : `${colorMode}`};

    ${event &&
    css`
      margin: 0 1em;
    `};

    ${program &&
    css`
      margin: 10em;
    `};

    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.paragraphMobile}px;
    }
  `
);
