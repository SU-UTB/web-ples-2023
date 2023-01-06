import { Headline } from "../../components/headline/Headline";
import { Subheadline } from "../../components/headline/subheadline/Subheadline";
import { Gap, PrimeWrapper, Row } from "./Prime.styled";

const Prime = () => {
  return (
    <PrimeWrapper>
      <Headline>
        Reprezentační ples Univerzity <Gap /> Tomáše Bati
      </Headline>
      <Row>
        <Subheadline>Pátek 3. 3. 2023 od 19:00</Subheadline>
        <Subheadline>Kongresové centrum Zlín</Subheadline>
      </Row>
    </PrimeWrapper>
  );
};

export default Prime;
