import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Paragraph = styled.p<{
  colorMode?: "white" | "black" | "ice";
  program?: boolean;
}>(
  ({ colorMode = "white", program }) => css`
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
    text-align: justify;
    line-height: 1.5;

    color: ${colorMode === "ice" ? `${theme.colors.ice}` : `${colorMode}`};

    ${program &&
    css`
      margin: 10em;
    `};

    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.paragraphMobile}px;
    }
  `
);
