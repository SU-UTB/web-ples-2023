import styled from "styled-components";
import theme from "../../theme/theme";

export const SalonsWrapperBg = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  padding-top: 2em;
  min-height: 100vh;

  background: linear-gradient(
    to bottom,
    ${theme.colors.dark},
    #4056b7,
    #b3cef2
  );
`;

export const SalonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  max-width: 1600px;
  align-items: center;

  color: ${theme.colors.primary};
  font-family: ${theme.fonts.monsterRegular};
`;

export const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const LinkToMainPage = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};
  cursor: pointer;
  font-family: ${theme.fonts.monsterRegular};
  font-size: ${theme.fontSizeElements.paragraphMobile}px;

  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    font-size: ${theme.fontSizeElements.caption}px;
  }
`;

export const ParagraphWrapper = styled.p`
  font-size: ${theme.fontSizeElements.h4}px;
  text-align: center;

  line-height: 1.5;

  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`;

export const RowWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;

  margin-bottom: 1em;
  font-size: ${theme.fontSizeElements.h4}px;

  @media screen and (${theme.breakpoints.mobileQuery}) {
    flex-direction: column;
    gap: 0.3em;
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const RowLabel = styled.div`
  text-align: end;
  min-width: 120px;

  @media screen and (${theme.breakpoints.mobileQuery}) {
    text-align: center;
  }
`;

export const Spacer = styled.div`
  margin-top: 2em;
  @media screen and (${theme.breakpoints.mobileQuery}) {
    margin-top: 1em;
  }
`;

export const FormSelect = styled.select`
  max-width: 320px;
  min-width: 270px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  border-radius: 1em;
  border: 1px solid black;
`;

export const FormInput = styled.input`
  display: flex;
  max-width: 300px;
  min-width: 250px;

  margin-bottom: 0.5rem;
  padding: 0.5rem;

  border-radius: 1em;
  border: 1px solid black;
`;

export const FormCheckbox = styled.input`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
`;

export const SalonsConsent = styled.a`
  font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  text-align: center;
  text-decoration: underline;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const FooterSU = styled.div`
  position: fixed;
  bottom: 0;
  color: ${theme.colors.dark};

  font-family: ${theme.fonts.monsterRegular};
  font-size: ${theme.fontSizeElements.h4}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.h5}px;
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
    position: relative;
    margin: 3em auto 0.3em;
  }
`;
