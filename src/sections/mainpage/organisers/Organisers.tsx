import { WrapperSection } from '../../../components/layout/wrapper/Wrapper.styled';
import { organisers } from './Organisers.content';
import {
  Link,
  LogoWrapper,
  OrganisersHeadline,
  OrganiserWrapper,
} from './Organisers.styled';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { analyticsApp } from '../../../tools/firebase';

const Organisers = () => {
  return (
    <WrapperSection centered>
      <OrganisersHeadline color="black">Organizátoři</OrganisersHeadline>
      <OrganiserWrapper>
        {organisers.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            key={index}
            onClick={() =>
              logEvent(getAnalytics(analyticsApp.app), 'organiser_clicked', {
                name: item.name,
              })
            }
          >
            <LogoWrapper src={item.imgSrc} alt={item.name} />
          </Link>
        ))}
      </OrganiserWrapper>
    </WrapperSection>
  );
};

export default Organisers;
