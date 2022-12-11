import { StyledImg } from "../../assets/images/Image";
import Headline from "../../components/headline/Headline";
import {
  WrapperSection,
  WrapperColumn,
  WrapperCentered,
} from "../../components/layout/wrapper/Wrapper.styled";
import Paragraph from "../../components/paragraph/Paragraph";
import frozenImg from "../../assets/images/frozen.jpg";

const Intro = () => {
  return (
    <WrapperSection>
      <WrapperColumn>
        <WrapperCentered>
          <StyledImg src={frozenImg} alt="Frozen" />
        </WrapperCentered>
      </WrapperColumn>
      <WrapperColumn>
        <Headline level={1}>O plese</Headline>
        <Paragraph align="left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus adipisci distinctio aperiam recusandae id rem iure
          debitis velit. Aut, vitae alias corrupti eum, laboriosam rerum
          dignissimos placeat.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus adipisci distinctio aperiam recusandae id rem iure
          debitis velit. Aut, vitae alias corrupti eum, laboriosam rerum
          dignissimos placeat, ex eveniet tempora excepturi non ratione
          assumenda iste quas. Maxime nesciunt adipisci necessitatibus quibusdam
          hic eligendi, sed distinctio ipsam dolore officia aliquid unde.
        </Paragraph>
      </WrapperColumn>
    </WrapperSection>
  );
};

export default Intro;
