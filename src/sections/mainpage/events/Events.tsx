import Headline from "../../../components/headline/Headline";
import { WrapperSection } from "../../../components/layout/wrapper/Wrapper.styled";
import Paragraph from "../../../components/paragraph/Paragraph";
import { CardImage, CardText, CardWrapper, EventCard } from "./Events.styled";
import { events } from "./Events.content";
import { GteDesktopCheck } from "../../../theme/MediaQueries";

const Events = () => {
  return (
    <WrapperSection centered id="events">
      <Headline color={GteDesktopCheck() ? "white" : "black"}>
        Doprovodný program
      </Headline>
      <Paragraph colorMode={GteDesktopCheck() ? "white" : "black"}>
        Abychom vás správně naladili, připravili jsme si po celý únor několik
        doprovodných programů. Těšit se můžete na bruslení na ledové ploše,
        promítání tématického filmu, tančírnu, či workshop na míchání drinků, ze
        kterých vám ztuhne krev v žilách.
        <br />
        <br />V den D se dámy mohou přijít zkrášlit šikovnými kadeřnicemi a
        kosmetičkami za symbolickou částku. O rezervacích do našeho salonu vás
        budeme včas informovat.
      </Paragraph>

      <CardWrapper>
        {events.map((item, index) => (
          <EventCard
            key={index}
            href={item.link}
            target={index === 4 ? "_self" : "_blank"}
            className="reveal reveal-slow"
          >
            <Headline align="center" card>
              {item.name}
            </Headline>
            <CardText>{item.date}</CardText>
            <CardImage src={item.image} alt={item.name}></CardImage>
          </EventCard>
        ))}
      </CardWrapper>
    </WrapperSection>
  );
};

export default Events;
