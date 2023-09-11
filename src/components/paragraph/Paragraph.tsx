import { ParagraphWrapper } from './Paragraph.styled';

interface ParagraphInterface {
  colorMode?: 'white' | 'black' | 'ice';
  align?: boolean;
  program?: boolean;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphInterface> = ({
  colorMode,
  align,
  program,
  children,
}) => {
  return (
    <ParagraphWrapper
      className="reveal"
      colorMode={colorMode}
      align={align}
      program={program}
    >
      {children}
    </ParagraphWrapper>
  );
};

export default Paragraph;
