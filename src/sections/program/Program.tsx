import {
  WrapperCentered,
  WrapperHalf,
  WrapperSection,
} from "../../components/layout/wrapper/Wrapper.styled";
import { timeline } from "./Program.content";
import { Row, WrapperTimeline, Time, Activity } from "./Program.styled";
import Headline from "../../components/headline/Headline";
import skate from "../../assets/images/skate.png";
import Paragraph from "../../components/paragraph/Paragraph";
import { GteDesktop, LteTablet } from "../../theme/MediaQueries";
import StyledImg from "../../assets/images/StyledImg/StyledImg";

const Program = () => {
  return (
    <>
      <GteDesktop>
        <WrapperSection id="program">
          <WrapperHalf>
            <WrapperCentered>
              <Headline align="left">Program</Headline>
              <Paragraph>
                Celým večerem vás provede moderátorka Lucie Borhyová. Těšit se
                můžete také na orchestr Prestige Symphony Orchestra a kapelu
                Prague Louge Trio, kteří zahrají již před půlnocí a pro
                (ne)milovníky zimního spánku i kapela Frontmen po půlnoci!
                Věříme, že Vám zařídí nezapomenutelný večer dlouhý jako polární
                noc!
              </Paragraph>
            </WrapperCentered>
          </WrapperHalf>
          <WrapperHalf>
            <WrapperCentered>
              <StyledImg mirrored src={skate} alt="skate" />
            </WrapperCentered>
          </WrapperHalf>
        </WrapperSection>
      </GteDesktop>

      <LteTablet>
        <WrapperSection id="program">
          <WrapperHalf>
            <WrapperCentered>
              <StyledImg mirrored src={skate} alt="skate" />
            </WrapperCentered>
          </WrapperHalf>
          <WrapperHalf>
            <WrapperCentered>
              <Headline align="left">Program</Headline>
              <Paragraph>
                Celým večerem vás provede moderátorka Lucie Borhyová. Těšit se
                můžete také na orchestr Prestige Symphony Orchestra a kapelu
                Prague Louge Trio, kteří zahrají již před půlnocí a pro
                (ne)milovníky zimního spánku i kapela Frontmen po půlnoci!
                Věříme, že Vám zařídí nezapomenutelný večer dlouhý jako polární
                noc!
              </Paragraph>
            </WrapperCentered>
          </WrapperHalf>
        </WrapperSection>
      </LteTablet>

      {/* <WrapperSection centered id="program">
        <WrapperTimeline>
          {timeline.map((item, index) => (
            <Row key={index}>
              <Time>{item.time}</Time>
              <Activity>{item.activity}</Activity>
            </Row>
          ))}
        </WrapperTimeline>
      </WrapperSection> */}
    </>
  );
};

export default Program;
