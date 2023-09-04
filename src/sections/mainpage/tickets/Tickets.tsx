import { StyledImgWrapper } from '../../../assets/images/StyledImg/StyledImg.styled';

import { useEffect } from 'react';
import tickets from '../../../assets/images/tickets.png';
import Headline from '../../../components/headline/Headline';
import {
  WrapperCentered,
  WrapperHalf,
  WrapperSection,
} from '../../../components/layout/wrapper/Wrapper.styled';
import Paragraph from '../../../components/paragraph/Paragraph';
import revealFrom from '../../../functions/reveal';
import { ContactAction } from '../contact/Contact.styled';

const Tickets = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => revealFrom('.reveal-img', 500));

    return () => {
      window.removeEventListener('scroll', () =>
        revealFrom('.reveal-img', 500)
      );
    };
  }, []);

  return (
    <WrapperSection id='vstupenky'>
      <WrapperHalf>
        <WrapperCentered>
          <StyledImgWrapper
            className='reveal-img'
            src={tickets}
            alt='vstupenky'
          />
        </WrapperCentered>
      </WrapperHalf>
      <WrapperHalf>
        <WrapperCentered>
          <Headline align='left'>Vstupenky</Headline>
          <Paragraph align>
            Prodej vstupenek bude spuštěn <strong>13. 2. 2023</strong> a bude
            probíhat v budově Rektorátu UTB (U13) na nám. T. G. Masaryka 5555,
            Zlín.
            <br />
            Prodej bude pokračovat od pondělí do čtvrtka od 9:00 do 16:00 a v
            pátky od 9:00 do 12:00 až do 2. 3. 2023, nebo do vyprodání lístků.
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

import { StyledImgWrapper } from '../../../assets/images/StyledImg/StyledImg.styled';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tickets from '../../../assets/images/tickets.png';
import Headline from '../../../components/headline/Headline';
import {
  WrapperCentered,
  WrapperHalf,
  WrapperSection,
} from '../../../components/layout/wrapper/Wrapper.styled';
import Paragraph from '../../../components/paragraph/Paragraph';
import revealFrom from '../../../functions/reveal';
import { ContactAction } from '../contact/Contact.styled';

const Tickets = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/rezervace');

  useEffect(() => {
    window.addEventListener('scroll', () => revealFrom('.reveal-img', 500));

    return () => {
      window.removeEventListener('scroll', () =>
        revealFrom('.reveal-img', 500)
      );
    };
  }, []);

  const NavigateRes = styled.a`
    text-decoration: none;
    color: white;
  `;

  return (
    <WrapperSection id='vstupenky'>
      <WrapperHalf>
        <WrapperCentered>
          <StyledImgWrapper
            className='reveal-img'
            src={tickets}
            alt='vstupenky'
          />
        </WrapperCentered>
      </WrapperHalf>
      <WrapperHalf>
        <WrapperCentered>
          <Headline align='left'>Vstupenky</Headline>
          <Paragraph align>
            VYPRODÁNO
            <br />
            <br />
            <NavigateRes onClick={handleClick}>Prodej </NavigateRes>
            vstupenek bude spuštěn <strong>13. 2. 2023</strong> a bude probíhat
            v budově Rektorátu UTB (U13) na nám. T. G. Masaryka 5555, Zlín.
            <br />
            <br />
            Prodej bude pokračovat od pondělí do čtvrtka od 9:00 do 16:00 a v
            pátky od 9:00 do 12:00 až do 2. 3. 2023, nebo do vyprodání lístků.
            <br />
            <br />
            Vybírat můžete ze tří druhů lístků, a to <strong>
              na stání
            </strong>{' '}
            (350 Kč, možnost sednutí si na volně dostupné sedačky bez stolu a
            bez možnosti místenky), <strong> sezení </strong> (500 Kč,
            vyprodáno) a <strong> sezení s rautem </strong> (750 Kč, neobsahuje
            nápoje).
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
