import Headline from '../../components/headline/Headline';
import { WrapperSection } from '../../components/layout/wrapper/Wrapper.styled';
import { partners } from './Partners.content';
import { PartnerLogo, PartnerImg, PartnerWrapper } from './Partners.styled';

const Partners = () => {
  return (
    <WrapperSection centered id='partneri'>
      <Headline color='black'>Partneři</Headline>
      <PartnerWrapper>
        {partners.map((item, index) => (
          <PartnerLogo key={index} className='reveal reveal-slow'>
            <PartnerImg src={item.logoSrc} alt={item.name} />
          </PartnerLogo>
        ))}
      </PartnerWrapper>
    </WrapperSection>
  );
};

export default Partners;
