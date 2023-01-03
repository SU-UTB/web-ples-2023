import Headline from "../../components/headline/Headline";
import {
  WrapperSection,
  WrapperMain,
  CardWrapper,
} from "../../components/layout/wrapper/Wrapper.styled";
import { partners } from "./Partners.content";
import { PartnerLogo, PartnerImg } from "./Partners.styled";

const Partners = () => {
  return (
    <WrapperMain id="partneri">
      <WrapperSection centered>
        <Headline>Partneři</Headline>
        <CardWrapper>
          {partners.map((item, index) => (
            <PartnerLogo key={index}>
              <PartnerImg src={item.logoSrc} alt={item.name} />
            </PartnerLogo>
          ))}
        </CardWrapper>
      </WrapperSection>
    </WrapperMain>
  );
};

export default Partners;
