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
  ContactAction,
} from "./Contact.styled";

const Contact = () => {
  return (
    <WrapperSection centered contact id="kontakt">
      <Headline color="black">Kontakty</Headline>
      <WrapperContact>
        {contacts.map((item, index) => (
          <WrapperContactItem key={index}>
            <ContactHalf>
              <ContactItem>{item.position}</ContactItem>
              <ContactAction href={item.phone}>{item.phone}</ContactAction>
            </ContactHalf>
            <ContactHalf>
              <ContactItem>{item.name}</ContactItem>
              {/* <ContactAction href="mailto:">{item.email}</ContactAction> */}
              <ContactAction
                href={"mailto:" + item.email + "?subject=Ples UTB 2023"}
              >
                {item.email}
              </ContactAction>
            </ContactHalf>
          </WrapperContactItem>
        ))}
        <WrapperContactItem>
          <ContactHalf>
            <ContactItem>Správci webu</ContactItem>
            <br />
            <ContactAction href="+420 731 014 934">
              +420 731 014 934
            </ContactAction>
            <ContactAction href="+420 774 980 515">
              +420 774 980 515
            </ContactAction>
          </ContactHalf>
          <ContactHalf>
            <ContactItem>Jan Bureš</ContactItem>
            <ContactItem>
              <strong>David Sedlář</strong>
            </ContactItem>
            <ContactAction>j_bures@sutb.cz</ContactAction>
            <ContactAction>sedlar@sutb.cz</ContactAction>
          </ContactHalf>
        </WrapperContactItem>
      </WrapperContact>
    </WrapperSection>
  );
};

export default Contact;
