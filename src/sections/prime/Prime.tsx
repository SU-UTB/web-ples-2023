import { Subheadline } from '../../components/headline/subheadline/Subheadline';
import { Gap, PrimeHeadline, PrimeWrapper, Row } from './Prime.styled';

const Prime = () => {
  return (
    <PrimeWrapper>
      <PrimeHeadline>
        Reprezentační ples Univerzity <Gap /> Tomáše Bati
      </PrimeHeadline>
      <Row>
        <Subheadline colorMode='black'>Pátek 3. 3. 2023 od 19:00</Subheadline>
        <Subheadline>Kongresové centrum Zlín</Subheadline>
      </Row>
    </PrimeWrapper>
  );
};

export default Prime;
