import { StyledImgWrapper } from '../../assets/images/StyledImg/StyledImg.styled';
import Headline from '../../components/headline/Headline';
import { WrapperSection } from '../../components/layout/wrapper/Wrapper.styled';
import { organisers } from './Organisers.content';
import { Link, OrganiserWrapper } from './Organisers.styled';

const Organisers = () => {
  return (
    <WrapperSection centered>
      <Headline color='black'>Organizátoři</Headline>
      <OrganiserWrapper>
        {organisers.map((item, index) => (
          <Link href={item.link} key={index} className='reveal reveal-slow'>
            <StyledImgWrapper src={item.imgSrc} alt={item.name} />
          </Link>
        ))}
      </OrganiserWrapper>
    </WrapperSection>
  );
};

export default Organisers;
