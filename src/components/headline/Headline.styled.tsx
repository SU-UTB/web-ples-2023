import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div<{
  level: string;
  inverse?: boolean;
  align?: string;
}>`
  ${({ inverse, align, level }) => css`
    font-family: ${theme.fonts.heading};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${level === "h1" &&
    css`
      font-size: 48px;
      line-height: 43px;
    `}
    ${level === "h2" &&
    css`
      font-size: 30px;
      line-height: 38px;
    `}
      ${level === "h3" &&
    css`
      font-size: 25px;
      line-height: 33px;
    `}
      ${level === "h4" &&
    css`
      font-size: 20px;
      line-height: 28px;
    `}
      ${level === "h5" &&
    css`
      font-size: 15px;
      line-height: 23px;
    `}
      ${inverse &&
    css`
      color: white;
    `}
      ${align &&
    css`
      justify-content: ${align};
    `};
  `}
`;
