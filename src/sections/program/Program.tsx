import { WrapperSection } from '../../components/layout/wrapper/Wrapper.styled';
import { timeline } from './Program.content';
import {
  Row,
  WrapperTimeline,
  Time,
  Activity,
  Moderator,
  ProgramHeadline,
} from './Program.styled';
import revealRight from '../../functions/revealRight';
import revealLeft from '../../functions/revealLeft';
import revealProgram from '../../functions/revealProgram';
import { useEffect } from 'react';

const Program = () => {
  useEffect(() => {
    window.addEventListener('scroll', revealLeft);
    window.addEventListener('scroll', revealRight);
    window.addEventListener('scroll', revealProgram);

    return () => {
      window.removeEventListener('scroll', revealLeft);
      window.removeEventListener('scroll', revealRight);
      window.removeEventListener('scroll', revealProgram);
    };
  }, []);

  return (
    <>
      <WrapperSection centered id='program'>
        <ProgramHeadline className='reveal-program'>Program</ProgramHeadline>
        <Moderator className='reveal-program'>
          Celým večerem vás provede moderátorka <strong>Lucie Borhyová.</strong>
        </Moderator>
        <br />
        <WrapperTimeline>
          {timeline.map((item, index) => (
            <>
              {item.time !== '' && <br />}
              <Row key={index}>
                <Time className='reveal-left'>{item.time}</Time>
                {item.time !== '' ? (
                  <strong>
                    <Activity className='reveal-right'>
                      {item.activity}
                    </Activity>
                  </strong>
                ) : (
                  <Activity className='reveal-right'>{item.activity}</Activity>
                )}
              </Row>
            </>
          ))}
        </WrapperTimeline>
      </WrapperSection>
    </>
  );
};

export default Program;
