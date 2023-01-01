import styled from "styled-components";
import { GteDesktop } from "../../../theme/MediaQueries";
import theme from "../../../theme/theme";
import Logo from "../../logo/Logo";

const MenuWrapper = styled.div`
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

const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 5em;
`;

const MenuItem = styled.a`
  text-decoration: none;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h5}px;
  font-weight: 500;
  color: ${theme.colors.secondary};
  transition: ${theme.animation.transitionBasic};
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

function Navbar() {
  return (
    <MenuWrapper>
      <Logo />
      <GteDesktop>
        <>
          <Menu>
            <MenuItem href="#vstupenky">Vstupenky</MenuItem>
            <MenuItem href="#program">Program</MenuItem>
            <MenuItem href="#kontakt">Kontakt</MenuItem>
            <MenuItem href="#partneri">Partneři</MenuItem>
          </Menu>
        </>
      </GteDesktop>
    </MenuWrapper>
  );
}

export default Navbar;
