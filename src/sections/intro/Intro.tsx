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
        <WrapperCentered className='reveal-img'>
          <StyledImg src={dress} alt='šaty' />
        </WrapperCentered>
      </WrapperHalf>
      <WrapperHalf>
        <WrapperCentered>
          <Headline align='left'>O plese</Headline>
          <Paragraph>
            Srdečně vás zveme na již XXI. ročník Reprezentačního plesu
            Univerzity Tomáše Bati ve Zlíně. Jako každý rok se ples ponese v
            určitém tématu, kterým je letos <strong> Zimní bál.</strong> Těšit
            se můžeme na krásnou zimní atmosféru a večer plný elegance a dobré
            zábavy. Aktuální dění a novinky můžete sledovat na {''}
            <Link
              href='https://www.facebook.com/events/524426676284645'
              rel='noopener noreferrer'
              target='_blank'
            >
              Facebookové události.
            </Link>
          </Paragraph>
          <br />
          <br />
          <br />
          <Headline align='left'>Dress code</Headline>
          <Paragraph>
            Ples se dresscodem ponese v odstínech modré, bílé, stříbrné a
            fialové barvy. Nebojte se, povolte uzdu své fantazii a nechte se
            inspirovat zimní atmosférou!
          </Paragraph>
        </WrapperCentered>
      </WrapperHalf>
    </WrapperSection>
  );
};

export default Intro;
