import { ParagraphWrapper } from "./Paragraph.styled";

interface PargraphInterface {
  align?: "left" | "center" | "right";
  program?: boolean;
  children: React.ReactNode;
}

const Paragraph: React.FC<PargraphInterface> = ({ align, children }) => {
  return <ParagraphWrapper align={align}>{children}</ParagraphWrapper>;
};

export default Paragraph;
