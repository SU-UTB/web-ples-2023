import { FooterWrapper, LogoText, ContentWrapper } from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <LogoText>
          Vytvořila <a href='https://sunovy.utb.cz/'>Studentská Unie UTB</a>
        </LogoText>
      </ContentWrapper>
    </FooterWrapper>
  );
}

export default Footer;
