import styled from "styled-components";
import theme from "../../../theme/theme";

export const MenuWrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 1600px;
  margin: 1em auto;
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

export const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 3em;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h5}px;
  color: ${theme.colors.secondary};
  transition: ${theme.animation.transitionBasic};
  &:hover {
    color: ${theme.colors.secondary};
  }
`;
