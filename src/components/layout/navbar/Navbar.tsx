import { GteDesktop } from "../../../theme/MediaQueries";
import Logo from "../../logo/Logo";
import { Menu, MenuWrapper, MenuItem } from "./Navbar.styled";

function Navbar() {
  return (
    <MenuWrapper>
      <Logo />
      <GteDesktop>
        <Menu>
          <MenuItem href="#oplese">O plese</MenuItem>
          <MenuItem href="#vstupenky">Vstupenky</MenuItem>
          <MenuItem href="#program">Program</MenuItem>
          <MenuItem href="#kontakt">Kontakt</MenuItem>
          <MenuItem href="#partneri">Partneři</MenuItem>
        </Menu>
      </GteDesktop>
    </MenuWrapper>
  );
}

export default Navbar;
