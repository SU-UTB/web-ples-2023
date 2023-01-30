import { ParagraphWrapper } from "./Paragraph.styled";

interface ParagraphInterface {
  colorMode?: "white" | "black" | "ice";
  program?: boolean;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphInterface> = ({
  colorMode,
  program,
  children,
}) => {
  return (
    <ParagraphWrapper
      className="reveal"
      colorMode={colorMode}
      program={program}
    >
      {children}
    </ParagraphWrapper>
  );
};

export default Paragraph;
