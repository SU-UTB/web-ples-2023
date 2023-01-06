import { TextWrapper } from "./StyledText.styled";

interface StyledTextInterface {
  children: React.ReactNode;
}

const StyledText: React.FC<StyledTextInterface> = ({ children }) => {
  return <TextWrapper> {children} </TextWrapper>;
};

export default StyledText;
