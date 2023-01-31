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
        Abychom vás správně naladili, připravili jsme si po celý únor několik
        doprovodných programů. Těšit se můžete na bruslení na ledové ploše,
        promítání tématického filmu, tančírnu, či workshop na míchání drinků, ze
        kterých vám ztuhne krev v žilách.
        <br />
        <br />V den D se dámy mohou přijít zkrášlit šikovnými kadeřnicemi a
        kosmetičkami za symbolickou částku. O rezervacích do našeho salonu vás
        budeme včas informovat.
      </Paragraph>

      <CardWrapper className='reveal reveal-slow'>
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
