import { StyledImg } from "../../assets/images/Image";
import {
  WrapperSection,
  WrapperHalf,
  WrapperCentered,
} from "../../components/layout/wrapper/Wrapper.styled";
import shoe from "../../assets/images/shoe.png";
import { Paragraph } from "../../components/paragraph/Paragraph";
import { Headline } from "../../components/headline/Headline";

const Intro = () => {
  return (
    <WrapperSection id="oplese">
      <WrapperHalf>
        <WrapperCentered>
          <StyledImg src={shoe} alt="Frozen" />
        </WrapperCentered>
      </WrapperHalf>
      <WrapperHalf>
        <WrapperCentered>
          <Headline align="left">O plese</Headline>
          <Paragraph>
            Srdečně vás zveme na již XXI. ročník Reprezentačního plesu
            Univerzity Tomáše Bati ve Zlíně. Jako každý rok se ples ponese v
            určitém tématu, kterým je letos <strong> Zimní bál </strong>. Těšit
            se můžeme na krásnou zimní atmosféru a večer plný elegance a dobré
            zábavy.
          </Paragraph>
          <br />
          <Headline align="left">Dress code</Headline>
          <Paragraph>
            Dress Code letošního plesu se ponese v duchu black tie creative.
            Můžete tedy povolit uzdu své fantazii a nechat se inspirovat zimní
            atmosférou. Pánové určitě nešlápnou vedle s motýlky či kravatami v
            barvách stříbrné, modré, fialové nebo mohou dorazit přímo v bílém
            obleku! Dámy se mohou držet stejných barev a doplnit své večerní
            šaty o kožešinu, aby jim z té zimní atmosféry nepřeběhl mráz po
            zádech.
          </Paragraph>
        </WrapperCentered>
      </WrapperHalf>
    </WrapperSection>
  );
};

export default Intro;
