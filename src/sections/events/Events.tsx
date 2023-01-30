import Headline from '../../components/headline/Headline';
import {
  CardWrapper,
  WrapperSection,
} from '../../components/layout/wrapper/Wrapper.styled';
import Paragraph from '../../components/paragraph/Paragraph';
import { CardImageWrapper, CardText, ProgramCard } from './Events.styled';
import { events } from './Events.content';

const Events = () => {
  return (
    <WrapperSection centered id='program'>
      <Headline>Doprovodný program</Headline>
      <Paragraph>
        Abychom vás správně naladili, připravili jsme si po celý únor, tedy
        měsíc před plesem, několik doprovodných programů. Těšit se určitě můžete
        na bruslení na ledové ploše, promítání tématického filmu, nebo třeba
        tančírnu, kde natrénujete všechny typy tanců, či workshop na míchání
        drinků, ze kterých vám ztuhne krev v žilách.
        <br />
        <br />V den D se dámy mohou přijít zkrášlit šikovnými kadeřnicemi a
        make-up artistky přímo na budovu U44 za symbolickou částku. Nezapomněli
        jsme ani na pány, kteří se budou moct nechat upravit v Barber shopu se
        slevou.
      </Paragraph>

      <CardWrapper>
        {events.map((item, index) => (
          <ProgramCard key={index}>
            <Headline align='center' card>
              {item.name}
            </Headline>
            <CardText>{item.date}</CardText>
            <CardImageWrapper
              src={item.image}
              alt={item.name}
            ></CardImageWrapper>
          </ProgramCard>
        ))}
      </CardWrapper>
    </WrapperSection>
  );
};

export default Events;
