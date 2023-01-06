import { Headline } from "../../components/headline/Headline";
import { WrapperSection } from "../../components/layout/wrapper/Wrapper.styled";
import { contacts } from "./contact.content";
import {
  ContactWrapper,
  LeftSide,
  RightSide,
  Row,
  WrapperContact,
} from "./Contact.styled";

const Contact = () => {
  return (
    <WrapperSection centered id="kontakt">
      <Headline>Kontakty</Headline>
      <WrapperContact>
        {contacts.map((item, index) => (
          <ContactWrapper key={index}>
            <Row>
              <LeftSide>
                <div>{item.position}</div>
                <div>{item.phone}</div>
              </LeftSide>
              <RightSide>
                <div>{item.name}</div>
                <div>{item.email}</div>
              </RightSide>
            </Row>
          </ContactWrapper>
        ))}
      </WrapperContact>
    </WrapperSection>
  );
};

export default Contact;
