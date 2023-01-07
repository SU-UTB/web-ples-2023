import { Headline } from "../../components/headline/Headline";
import { WrapperSection } from "../../components/layout/wrapper/Wrapper.styled";
import { contacts } from "./Contact.content";
import {
  LeftSide,
  RightSide,
  WrapperContactItem,
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
          <WrapperContactItem key={index}>
            <ContactHalf>
              <ContactItem>{item.position}</ContactItem>
              <ContactItem>{item.phone}</ContactItem>
            </ContactHalf>
            <ContactHalf>
              <ContactItem>{item.name}</ContactItem>
              <ContactItem>{item.email}</ContactItem>
            </ContactHalf>
          </WrapperContactItem>
        ))}
        <WrapperContactItem>
          <ContactHalf>
            <ContactItem>Správci webu</ContactItem>
            <br />
            <ContactItem>+420 731 014 934</ContactItem>
            <ContactItem>+420 774 980 515 </ContactItem>
          </ContactHalf>
          <ContactHalf>
            <ContactItem>Jan Bureš</ContactItem>
            <ContactItem>
              <strong>David Sedlář </strong>
            </ContactItem>
            <ContactItem>j_bures@sutb.cz</ContactItem>
            <ContactItem>sedlar@sutb.cz</ContactItem>
          </ContactHalf>
        </WrapperContactItem>
      </WrapperContact>
    </WrapperSection>
  );
};

export default Contact;
