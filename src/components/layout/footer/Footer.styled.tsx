import styled from "styled-components";
import theme from "../../../theme/theme";

export const MenuWrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 1600px;
  margin: 0em auto 2em auto;
  align-items: center;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h5}px;
  color: ${theme.colors.text};
  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.caption}px;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 3em;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    gap: 1em;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${theme.colors.text};
  transition: ${theme.animation.transitionBasic};
  &:hover {
    color: ${theme.colors.text};
  }
`;

export const LogoText = styled.div`
  white-space: nowrap;
  a {
    color: ${theme.colors.text};
  }
`;
