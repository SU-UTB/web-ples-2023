import Headline from "../../components/headline/Headline";
import {
  WrapperMain,
  WrapperSection,
} from "../../components/layout/wrapper/Wrapper.styled";

const Prime = () => {
  return (
    <WrapperMain>
      <WrapperSection centered>
        <Headline>Pátek 3. 3. 2023 od 19:00</Headline>
        <Headline>Kongresové centrum Zlín</Headline>
      </WrapperSection>
    </WrapperMain>
  );
};

export default Prime;
