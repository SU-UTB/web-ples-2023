import { Headline } from "../../components/headline/Headline";
import {
  WrapperSection,
  CardWrapper,
} from "../../components/layout/wrapper/Wrapper.styled";
import { partners } from "./Partners.content";
import { PartnerLogo, PartnerImg } from "./Partners.styled";

const Partners = () => {
  return (
    <WrapperSection centered id="partneri">
      <Headline>Partneři</Headline>
      <CardWrapper>
        {partners.map((item, index) => (
          <PartnerLogo key={index}>
            <PartnerImg src={item.logoSrc} alt={item.name} />
          </PartnerLogo>
        ))}
      </CardWrapper>
    </WrapperSection>
  );
};

export default Partners;
