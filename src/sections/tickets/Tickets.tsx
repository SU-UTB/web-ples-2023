import { StyledImgWrapper } from '../../assets/images/StyledImg/StyledImg.styled';
import {
  WrapperSection,
  WrapperHalf,
  WrapperCentered,
} from '../../components/layout/wrapper/Wrapper.styled';
import Paragraph from '../../components/paragraph/Paragraph';
import Headline from '../../components/headline/Headline';

import tickets from '../../assets/images/tickets.png';
import { ContactAction } from '../contact/Contact.styled';

const Tickets = () => {
  return (
    <WrapperSection id='vstupenky'>
      <WrapperHalf>
        <WrapperCentered>
          <StyledImgWrapper
            className='reveal reveal-6'
            src={tickets}
            alt='tickets'
          />
        </WrapperCentered>
      </WrapperHalf>
      <WrapperHalf>
        <WrapperCentered>
          <Headline align='left'>Vstupenky</Headline>
          <Paragraph align>
            Prodej od <strong>13. 2. 2023</strong>
            <br />
            Vybírat můžete ze tří druhů lístků, a to na stání (350 Kč), sezení
            (500 Kč) a sezení s rautem (750 Kč).
            <br />
            <br />
            Bližší informace k předprodeji: Aneta Nejezchlebová
            <br />
            <ContactAction
              href={'mailto:nejezchlebova@sutb.cz?subject=Ples UTB 2023'}
              tickets
            >
              nejezchlebova@sutb.cz
            </ContactAction>
            <br />
            <ContactAction href='tel:+420-723-132-295' tickets>
              +420 723 132 295
            </ContactAction>
          </Paragraph>
        </WrapperCentered>
      </WrapperHalf>
    </WrapperSection>
  );
};

export default Tickets;
