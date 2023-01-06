import Headline from "../../components/headline/Headline";
import {
  WrapperSection,
  WrapperMain,
  CardWrapper,
} from "../../components/layout/wrapper/Wrapper.styled";
import { timeline, sideProgram } from "./program.content";
import {
  Row,
  WrapperTimeline,
  Time,
  Activity,
  ProgramCard,
  CardImageWrapper,
  CardText,
} from "./Program.styled";
import frozenImg from "../../assets/images/frozen.jpg";

const Program = () => {
  return (
    <WrapperMain id="program">
      <WrapperSection centered>
        <Headline>Program</Headline>
        <WrapperTimeline>
          {timeline.map((item, index) => (
            <Row key={index}>
              <Time>{item.time}</Time>
              <Activity>{item.activity}</Activity>
            </Row>
          ))}
        </WrapperTimeline>
        <Headline>Doprovodný program</Headline>

        <CardWrapper>
          {sideProgram.map((item, index) => (
            <ProgramCard key={index}>
              <Headline align="center" card>
                {item.name}
              </Headline>
              <CardText>{item.date}</CardText>
              <CardImageWrapper
                src={frozenImg}
                alt={item.name}
              ></CardImageWrapper>
            </ProgramCard>
          ))}
        </CardWrapper>
      </WrapperSection>
    </WrapperMain>
  );
};

export default Program;
