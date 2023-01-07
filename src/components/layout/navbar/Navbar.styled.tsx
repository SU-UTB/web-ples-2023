import styled from "styled-components";
import theme from "../../../theme/theme";

export const MenuWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 2em;
  gap: 3em;
  justify-content: center;
  align-items: center;

  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-left: 20px;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h4}px;
  color: ${theme.colors.dark};
  transition: ${theme.animation.transitionBasic};
  &:hover {
    color: ${theme.colors.dark};
  }
`;
