import {
  Menu,
  FooterWrapper,
  MenuItem,
  LogoText,
  ContentWrapper,
} from "./Footer.styled";

function Navbar() {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <LogoText>
          Vytvořila <a href="https://sunovy.utb.cz/">Studentská Unie UTB</a>
        </LogoText>
        <Menu>
          <MenuItem href="#oplese">Facebook</MenuItem>
          <MenuItem href="#vstupenky">Instagram</MenuItem>
        </Menu>
      </ContentWrapper>
    </FooterWrapper>
  );
}

export default Navbar;
