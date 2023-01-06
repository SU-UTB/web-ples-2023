import { Menu, MenuWrapper, MenuItem, LogoText } from "./Footer.styled";

function Navbar() {
  return (
    <MenuWrapper>
      <LogoText>
        Vytvořila <a href="https://sunovy.utb.cz/">Studentská Unie UTB</a>
      </LogoText>
      <Menu>
        <MenuItem href="#oplese">Facebook</MenuItem>
        <MenuItem href="#vstupenky">Instagram</MenuItem>
      </Menu>
    </MenuWrapper>
  );
}

export default Navbar;
