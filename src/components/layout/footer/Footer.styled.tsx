import styled from "styled-components";
import theme from "../../../theme/theme";

export const FooterWrapper = styled.div`
  display: flex;
  max-width: 2500px;
  margin: 0 auto;
  padding: 2.5em 0;

  color: ${theme.colors.primary};
  background-color: ${theme.colors.dark};

  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h4}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.caption}px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
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
  color: ${theme.colors.primary};
  transition: ${theme.animation.transitionBasic};
  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const LogoText = styled.div`
  white-space: nowrap;
  a {
    color: ${theme.colors.primary};
  }
`;
