import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const ParagraphWrapper = styled.div<{
  align?: "left" | "center" | "right";
}>`
  ${({ align = "center" }) => css`
    font-family: ${theme.fonts.monsterRegular};
    font-size: ${theme.fontSizeElements.paragraphDesktop}px;
    display: flex;

    ${align &&
    css`
      text-align: ${align};
    `};

    @media screen and (${theme.breakpoints.tabletQuery}) {
      font-size: ${theme.fontSizeElements.paragraphTablet}px;
    }
    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.paragraphMobile}px;
    }
  `}
`;
