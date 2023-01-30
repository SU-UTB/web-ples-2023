import {
  Menu,
  FooterWrapper,
  MenuItem,
  LogoText,
  ContentWrapper,
} from './Footer.styled';

function Navbar() {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <LogoText>
          Vytvořila <a href='https://sunovy.utb.cz/'>Studentská Unie UTB</a>
        </LogoText>
        <Menu>
          <MenuItem
            href='https://www.facebook.com/studentskaunieutb'
            rel='noopener noreferrer'
          >
            Facebook
          </MenuItem>
          <MenuItem
            href='https://www.instagram.com/studentskaunieutb/'
            rel='noopener noreferrer'
          >
            Instagram
          </MenuItem>
        </Menu>
      </ContentWrapper>
    </FooterWrapper>
  );
}

export default Navbar;
