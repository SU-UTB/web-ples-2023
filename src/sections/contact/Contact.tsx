import Headline from "../../components/headline/Headline";
import { WrapperSection } from "../../components/layout/wrapper/Wrapper.styled";
import { GteHugeDesktopCheck } from "../../theme/MediaQueries";
import { contacts } from "./Contact.content";
import {
  WrapperContactItem,
  WrapperContact,
  ContactItem,
  ContactHalf,
  ContactAction,
} from "./Contact.styled";

const Contact = () => {
  return (
    <WrapperSection centered contact id="kontakt">
      <Headline color={GteHugeDesktopCheck() ? "ice" : "black"}>
        Kontakty
      </Headline>
      <WrapperContact>
        {contacts.map((item, index) => (
          <WrapperContactItem key={index} className="reveal">
            <ContactHalf>
              <ContactItem>{item.position}</ContactItem>
              <ContactAction href={item.phone}>{item.phone}</ContactAction>
            </ContactHalf>
            <ContactHalf>
              <ContactItem>{item.name}</ContactItem>
              <ContactAction
                href={"mailto:" + item.email + "?subject=Ples UTB 2023"}
              >
                {item.email}
              </ContactAction>
            </ContactHalf>
          </WrapperContactItem>
        ))}
        <WrapperContactItem className="reveal">
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
