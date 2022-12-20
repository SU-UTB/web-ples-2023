import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const ParagraphWrapper = styled.div<{
  align?: "left" | "center" | "right";
  program?: boolean;
}>(
  ({ align = "center", program }) => css`
    font-size: ${theme.fontSizeElements.paragraphDesktop}px;
    display: flex;

    ${align &&
    css`
      text-align: ${align};
    `};

    ${program &&
    css`
      margin: 10em;
    `};

    @media screen and (${theme.breakpoints.tabletQuery}) {
      font-size: ${theme.fontSizeElements.paragraphTablet}px;
    }
    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.paragraphMobile}px;
    }
  `
);
