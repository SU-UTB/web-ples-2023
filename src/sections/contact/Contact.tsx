import Headline from '../../components/headline/Headline';
import { WrapperSection } from '../../components/layout/wrapper/Wrapper.styled';
import { GteHugeDesktopCheck } from '../../theme/MediaQueries';
import { contacts } from './Contact.content';
import {
  WrapperContactItem,
  WrapperContact,
  ContactItem,
  ContactHalf,
  ContactAction,
} from './Contact.styled';

const Contact = () => {
  return (
    <WrapperSection centered id='kontakt'>
      <Headline color={GteHugeDesktopCheck() ? 'white' : 'black'}>
        Kontakty
      </Headline>
      <WrapperContact>
        {contacts.map((item, index) => (
          <WrapperContactItem key={index} className='reveal'>
            <ContactHalf className='reveal-left'>
              <ContactItem>{item.position}</ContactItem>
              <ContactAction href={item.phoneLink}>{item.phone}</ContactAction>
            </ContactHalf>

            <ContactHalf className='reveal-right'>
              <ContactItem>{item.name}</ContactItem>
              <ContactAction
                href={'mailto:' + item.email + '?subject=Ples UTB 2023'}
              >
                {item.email}
              </ContactAction>
            </ContactHalf>
          </WrapperContactItem>
        ))}
        <WrapperContactItem className='reveal'>
          <ContactHalf>
            <ContactItem>Správci webu</ContactItem>
            <br />
            <ContactAction href='tel:+420-731-014-934'>
              +420 731 014 934
            </ContactAction>
            <ContactAction href='tel:+420-774-980515'>
              +420 774 980 515
            </ContactAction>
          </ContactHalf>
          <ContactHalf>
            <ContactItem>Jan Bureš</ContactItem>
            <ContactItem>
              <strong>David Sedlář</strong>
            </ContactItem>
            <ContactAction
              href={'mailto:j_bures@sutb.cz?subject=Ples UTB 2023'}
            >
              j_bures@sutb.cz
            </ContactAction>
            <ContactAction href={'mailto:sedlar@sutb.cz?subject=Ples UTB 2023'}>
              sedlar@sutb.cz
            </ContactAction>
          </ContactHalf>
        </WrapperContactItem>
      </WrapperContact>
    </WrapperSection>
  );
};

export default Contact;
