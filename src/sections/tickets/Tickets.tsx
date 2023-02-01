import { StyledImgWrapper } from "../../assets/images/StyledImg/StyledImg.styled";
import {
  WrapperSection,
  WrapperHalf,
  WrapperCentered,
} from "../../components/layout/wrapper/Wrapper.styled";
import Paragraph from "../../components/paragraph/Paragraph";
import Headline from "../../components/headline/Headline";

import tickets from "../../assets/images/tickets.png";
import { ContactAction } from "../contact/Contact.styled";
import { useEffect } from "react";
import revealFrom from "../../functions/reveal";

const Tickets = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => revealFrom(".reveal-img", 500));

    return () => {
      window.removeEventListener("scroll", () =>
        revealFrom(".reveal-img", 500)
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
            Prodej vstupenek bude spuštěn<strong>13. 2. 2023</strong> a bude
            probíhat v budově Rektorátu UTB (U13) na nám. T. G. Masaryka 5555,
            Zlín.
            <br />
            Prodej bude pokračovat ve všední dny od 9:00 do 16:00 až do 2. 3.
            2023, nebo do vyprodání lístků.
            <br />
            Vybírat můžete ze tří druhů lístků, a to na stání (350 Kč), sezení
            (500 Kč) a sezení s rautem (750 Kč).
            <br />
            <br />
            Bližší informace k předprodeji: Aneta Nejezchlebová
            <br />
            <ContactAction
              href={"mailto:nejezchlebova@sutb.cz?subject=Ples UTB 2023"}
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
