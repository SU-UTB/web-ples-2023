import { GteDesktop } from "../../../theme/MediaQueries";
import { navbarItems } from "./Navbar.content";
import { MenuWrapper, MenuItem } from "./Navbar.styled";

function Navbar() {
  return (
    <GteDesktop>
      <MenuWrapper>
        {navbarItems.map((item, index) => (
          <MenuItem key={index} href={item.tag}>
            {item.text}
          </MenuItem>
        ))}
      </MenuWrapper>
    </GteDesktop>
  );
}

export default Navbar;
