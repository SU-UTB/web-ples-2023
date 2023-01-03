import { GteDesktop } from "../../../theme/MediaQueries";
import Logo from "../../logo/Logo";
import { navbarItems } from "./Navbar.content";
import { Menu, MenuWrapper, MenuItem } from "./Navbar.styled";

function Navbar() {
  return (
    <MenuWrapper>
      <Logo />
      <GteDesktop>
        <Menu>
          {navbarItems.map((item, index) => (
            <MenuItem key={index} href={item.tag}>
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </GteDesktop>
    </MenuWrapper>
  );
}

export default Navbar;
