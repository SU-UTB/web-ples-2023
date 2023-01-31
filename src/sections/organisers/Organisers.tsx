import Headline from '../../components/headline/Headline';
import { WrapperSection } from '../../components/layout/wrapper/Wrapper.styled';
import { organisers } from './Organisers.content';
import { Link, LogoWrapper, OrganiserWrapper } from './Organisers.styled';

const Organisers = () => {
  return (
    <WrapperSection centered>
      <Headline color='black'>Organizátoři</Headline>
      <OrganiserWrapper>
        {organisers.map((item, index) => (
          <Link href={item.link} key={index} className='reveal reveal-logo'>
            <LogoWrapper src={item.imgSrc} alt={item.name} />
          </Link>
        ))}
      </OrganiserWrapper>
    </WrapperSection>
  );
};

export default Organisers;
