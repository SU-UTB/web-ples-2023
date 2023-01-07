import { StyledImg } from "../../assets/images/Image";
import {
  WrapperSection,
  WrapperHalf,
  WrapperCentered,
} from "../../components/layout/wrapper/Wrapper.styled";
import { Paragraph } from "../../components/paragraph/Paragraph";
import { Headline } from "../../components/headline/Headline";
import film from "../../assets/images/film.svg";

const Tickets = () => {
  return (
    <WrapperSection id="vstupenky">
      <WrapperHalf>
        <WrapperCentered>
          <StyledImg src={film} alt="Frozen" />
        </WrapperCentered>
      </WrapperHalf>
      <WrapperHalf>
        <WrapperCentered>
          <Headline align="left">Vstupenky</Headline>
          <Paragraph>
            Online rezervace od <strong> 1. 2. 2023 </strong>
            <br />
            <br />
            Bližší informace k předprodeji: Aneta Nejezchlebová
            <br />
            nejezchlebova@sutb.cz
            <br />
            +420 723 132 295
          </Paragraph>
        </WrapperCentered>
      </WrapperHalf>
    </WrapperSection>
  );
};

export default Tickets;
