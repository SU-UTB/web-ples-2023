import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const ParagraphWrapper = styled.div<{
  align?: string;
}>`
  ${({ align }) => css`
    font-family: ${theme.fonts.monsterRegular};
    font-size: ${theme.fontSizeElements.paragraphDesktop}px;
    display: flex;
    margin: 1rem;

    ${align &&
    css`
      text-align: ${align};
    `};
  `}
`;
