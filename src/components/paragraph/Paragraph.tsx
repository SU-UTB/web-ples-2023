import { ParagraphWrapper } from "./Paragraph.styled";

interface PargraphInterface {
  align?: "left" | "right";
  children: React.ReactNode;
}

const Paragraph: React.FC<PargraphInterface> = ({ align, children }) => {
  return <ParagraphWrapper align={align}>{children}</ParagraphWrapper>;
};

export default Paragraph;
