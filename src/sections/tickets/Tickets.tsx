import { StyledImg } from "../../assets/images/Image";
import Headline from "../../components/headline/Headline";
import {
  WrapperSection,
  WrapperHalf,
  WrapperCentered,
} from "../../components/layout/wrapper/Wrapper.styled";
import Paragraph from "../../components/paragraph/Paragraph";
import frozenImg from "../../assets/images/frozen.jpg";
import { GteDesktop, LteTablet } from "../../theme/MediaQueries";

const Tickets = () => {
  return (
    <WrapperSection id="vstupenky">
      <LteTablet>
        <>
          <WrapperHalf>
            <WrapperCentered>
              <StyledImg src={frozenImg} alt="Frozen" />
            </WrapperCentered>
          </WrapperHalf>
          <WrapperHalf>
            <WrapperCentered>
              <Headline>Vstupenky</Headline>
              <Paragraph align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus adipisci distinctio aperiam recusandae id rem
                iure debitis velit. Aut, vitae alias corrupti eum, laboriosam
                rerum dignissimos placeat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus adipisci distinctio aperiam recusandae id rem
                iure debitis velit. Aut, vitae alias corrupti eum, laboriosam
                rerum dignissimos placeat, ex eveniet tempora excepturi non
                ratione assumenda iste quas. Maxime nesciunt adipisci
                necessitatibus quibusdam hic eligendi, sed distinctio ipsam
                dolore officia aliquid unde.
              </Paragraph>
            </WrapperCentered>
          </WrapperHalf>
        </>
      </LteTablet>
      <GteDesktop>
        <>
          <WrapperHalf>
            <WrapperCentered>
              <Headline align="right">Vstupenky</Headline>
              <Paragraph align="right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus adipisci distinctio aperiam recusandae id rem
                iure debitis velit. Aut, vitae alias corrupti eum, laboriosam
                rerum dignissimos placeat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus adipisci distinctio aperiam recusandae id rem
                iure debitis velit. Aut, vitae alias corrupti eum, laboriosam
                rerum dignissimos placeat, ex eveniet tempora excepturi non
                ratione assumenda iste quas. Maxime nesciunt adipisci
                necessitatibus quibusdam hic eligendi, sed distinctio ipsam
                dolore officia aliquid unde.
              </Paragraph>
            </WrapperCentered>
          </WrapperHalf>
          <WrapperHalf>
            <WrapperCentered>
              <StyledImg src={frozenImg} alt="Frozen" />
            </WrapperCentered>
          </WrapperHalf>
        </>
      </GteDesktop>
    </WrapperSection>
  );
};

export default Tickets;
