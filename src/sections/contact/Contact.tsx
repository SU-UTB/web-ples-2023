import { Headline } from "../../components/headline/Headline";
import { WrapperSection } from "../../components/layout/wrapper/Wrapper.styled";
import { contacts } from "./Contact.content";
import {
  LeftSide,
  RightSide,
  ContactWrapper,
  WrapperContact,
  ContactItem,
  ContactHalf,
} from "./Contact.styled";

const Contact = () => {
  return (
    <WrapperSection centered contact id="kontakt">
      <Headline colorMode="black">Kontakty</Headline>
      <WrapperContact>
        {contacts.map((item, index) => (
          <ContactWrapper key={index}>
            <ContactHalf>
              <ContactItem>{item.position}</ContactItem>
              <ContactItem>{item.phone}</ContactItem>
            </ContactHalf>
            <ContactHalf>
              <ContactItem>{item.name}</ContactItem>
              <ContactItem>{item.email}</ContactItem>
            </ContactHalf>
          </ContactWrapper>
        ))}
        <ContactWrapper>
          <ContactHalf>
            <ContactItem>Správci webu</ContactItem>
            <ContactItem>+420 731 014 934</ContactItem>
            <ContactItem>+420 774 980 515 </ContactItem>
          </ContactHalf>
          <ContactHalf>
            <ContactItem>Jan Bureš, David Sedlář</ContactItem>
            <ContactItem>j_bures@sutb.cz</ContactItem>
            <ContactItem>sedlar@sutb.cz</ContactItem>
          </ContactHalf>
        </ContactWrapper>
      </WrapperContact>
    </WrapperSection>
  );
};

export default Contact;
