import {
  WrapperSection,
  WrapperHalf,
  WrapperCentered,
} from '../../components/layout/wrapper/Wrapper.styled';
import dress from '../../assets/images/dress.png';
import Paragraph from '../../components/paragraph/Paragraph';
import Headline from '../../components/headline/Headline';
import StyledImg from '../../assets/images/StyledImg/StyledImg';
import { Link } from '../../components/link/Link.styled';

const Intro = () => {
  return (
    <WrapperSection id='oplese'>
      <WrapperHalf>
        <WrapperCentered>
          <StyledImg src={dress} alt='shoe' />
        </WrapperCentered>
      </WrapperHalf>
      <WrapperHalf>
        <WrapperCentered>
          <Headline align='left'>O plese</Headline>
          <Paragraph>
            Srdečně vás zveme na již XXI. ročník Reprezentačního plesu
            Univerzity Tomáše Bati ve Zlíně. Jako každý rok se ples ponese v
            určitém tématu, kterým je letos <strong> Zimní bál </strong>. Těšit
            se můžeme na krásnou zimní atmosféru a večer plný elegance a dobré
            zábavy. Aktuální dění a novinky můžete sledovat na {''}
            <Link
              href='https://www.facebook.com/events/524426676284645'
              rel='noopener noreferrer'
            >
              Facebookové události
            </Link>
          </Paragraph>
          <br />
          <Headline align='left'>Dress code</Headline>
          <Paragraph>
            Text u dresscodu změnit na: Dress Code letošního plesu se ponese v
            duchu zimní atmosféry. Dámy ani pánové určitě nešlápnou vedle s
            modrou, fialovou , stříbrnou nebo bílou barvou.
          </Paragraph>
        </WrapperCentered>
      </WrapperHalf>
    </WrapperSection>
  );
};

export default Intro;
