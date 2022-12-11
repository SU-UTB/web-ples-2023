import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div<{
  level: string;
  inverse?: boolean;
  align?: string;
}>(
  ({ inverse, align }) => css`
    font-family: ${theme.fonts.heading};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.fontSizeElements.h2}px;
    line-height: 30px;

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
      line-height: 20px;
    }
    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.h4}px;
      line-height: 10px;
    }
  `
);
