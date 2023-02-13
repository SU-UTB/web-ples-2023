import { useEffect } from 'react';
import {
  WrapperSection,
  WrapperHalf,
  WrapperCentered,
} from '../../../components/layout/wrapper/Wrapper.styled';
import dress from '../../../assets/images/dress.png';
import Paragraph from '../../../components/paragraph/Paragraph';
import Headline from '../../../components/headline/Headline';
import StyledImg from '../../../assets/images/StyledImg/StyledImg';
import { Link } from '../../../components/link/Link.styled';
import revealFrom from '../../../functions/reveal';

const Intro = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => revealFrom('.reveal-img', 500));

    return () => {
      window.removeEventListener('scroll', () =>
        revealFrom('.reveal-img', 500)
      );
    };
  }, []);

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
            Letošní téma nabízí spoustu možností pro váš dresscode. Ať už
            zvolíte modrou, bílou, fialovou, stříbrnou nebo šedivou barvu,
            nešlápnete vedle.
            <br />
            <br />
            Pro <strong> muže </strong>se bude hodit modrý oblek. Postačí ale i
            klasický černý nebo šedý, který doplníte o modrou kravatu nebo
            motýlka. Můžete zvolit i modrou barvu košile. Váš oblek mohou
            podtrhnout třpytivé nebo jinak ozvláštněné manžetové knoflíčky.
            Nezapomeňte na klasickou pánskou obuv.
            <br />
            <br />
            Pro <strong> ženy </strong> doporučujeme dlouhé šaty v jedné z výše
            zmíněných barev případně s vlečkou, dlouhý rukáv i výrazné zdobení
            na šatech. Můžete zvolit i kratší střih pod kolena. Určitě
            nepodceňte výraznější třpytivé doplňky ve stylu zimy a ledu –
            korunka, čelenka nebo jiný doplněk do vlasů. Nemusíte se bát ani
            kožešiny či rukaviček. Nezapomeňte na podpatky, které dodají vašemu
            outfitu mrazivou tečku.
          </Paragraph>
        </WrapperCentered>
      </WrapperHalf>
    </WrapperSection>
  );
};

export default Intro;
