import { HeadlineWrapper } from './Headline.styled';

interface HeadlineInterface {
  color?: 'white' | 'black' | 'ice';
  align?: 'left' | 'center' | 'right';
  card?: boolean;
  children: React.ReactNode;
}

const Headline: React.FC<HeadlineInterface> = ({
  color,
  align,
  card,
  children,
}) => {
  return (
    <HeadlineWrapper className="reveal" color={color} align={align} card={card}>
      {children}
    </HeadlineWrapper>
  );
};

export default Headline;
