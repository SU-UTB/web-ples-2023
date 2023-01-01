import Headline from "../../components/headline/Headline";
import Subheadline from "../../components/headline/subheadline/Subheadline";
import {
  WrapperMain,
  WrapperSection,
} from "../../components/layout/wrapper/Wrapper.styled";

const Prime = () => {
  return (
    <WrapperMain background>
      <WrapperSection centered>
        <Headline>Pátek 3. 3. 2023 od 19:00</Headline>
        <Subheadline>Kongresové centrum Zlín</Subheadline>
      </WrapperSection>
    </WrapperMain>
  );
};

export default Prime;
