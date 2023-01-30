import { WrapperSection } from '../../components/layout/wrapper/Wrapper.styled';
import { timeline } from './Program.content';
import { Row, WrapperTimeline, Time, Activity } from './Program.styled';
import Headline from '../../components/headline/Headline';
import Paragraph from '../../components/paragraph/Paragraph';

const Program = () => {
  return (
    <>
      <WrapperSection centered id='program'>
        <Headline align='left'>Program</Headline>
        <Paragraph>
          Celým večerem vás provede moderátorka <strong>Lucie Borhyová</strong>
        </Paragraph>
        <br />
        <WrapperTimeline className='reveal'>
          {timeline.map((item, index) => (
            <Row key={index}>
              <Time>{item.time}</Time>
              <Activity>{item.activity}</Activity>
            </Row>
          ))}
        </WrapperTimeline>
      </WrapperSection>
    </>
  );
};

export default Program;
