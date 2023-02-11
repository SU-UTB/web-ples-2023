import { WrapperSection } from '../../../components/layout/wrapper/Wrapper.styled';
import { timeline } from './Program.content';
import {
  Row,
  WrapperTimeline,
  Time,
  Activity,
  Moderator,
  ProgramHeadline,
} from './Program.styled';
import { useEffect } from 'react';
import revealFrom from '../../../functions/reveal';

const Program = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => revealFrom('.reveal-left', 100));
    window.addEventListener('scroll', () => revealFrom('.reveal-right', 100));
    window.addEventListener('scroll', () => revealFrom('.reveal-program', 50));

    return () => {
      window.removeEventListener('scroll', () =>
        revealFrom('.reveal-left', 100)
      );
      window.removeEventListener('scroll', () =>
        revealFrom('.reveal-right', 100)
      );
      window.removeEventListener('scroll', () =>
        revealFrom('.reveal-program', 50)
      );
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
            <div key={index}>
              {item.time !== '' && <br />}
              <Row>
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
            </div>
          ))}
        </WrapperTimeline>
      </WrapperSection>
    </>
  );
};

export default Program;
