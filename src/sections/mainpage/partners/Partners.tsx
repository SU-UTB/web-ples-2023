import Headline from '../../../components/headline/Headline';
import { WrapperSection } from '../../../components/layout/wrapper/Wrapper.styled';
import { partners } from './Partners.content';
import { PartnerImg, PartnerLogo, PartnerWrapper } from './Partners.styled';

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

import flyUnited from '../../../assets/images/partners/generalPartner/flyUnited.svg';
import Headline from '../../../components/headline/Headline';
import { WrapperSection } from '../../../components/layout/wrapper/Wrapper.styled';
import { mainPartners, partners } from './Partners.content';
import {
  GeneralPartnerLogo,
  PartnerImg,
  PartnerLogo,
  PartnerWrapper,
} from './Partners.styled';

const Partners = () => {
  return (
    <WrapperSection centered id='partneri'>
      <Headline color='black'>Generální partner</Headline>
      <GeneralPartnerLogo className='reveal reveal-slow'>
        <PartnerImg src={flyUnited} alt='Fly United' />
      </GeneralPartnerLogo>

      <Headline color='black'>Hlavní partneři</Headline>
      <PartnerWrapper>
        {mainPartners.map((item, index) => (
          <PartnerLogo key={index} className='reveal reveal-slow'>
            <PartnerImg src={item.logoSrc} alt={item.name} />
          </PartnerLogo>
        ))}
      </PartnerWrapper>
      <br />
      <br />

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
