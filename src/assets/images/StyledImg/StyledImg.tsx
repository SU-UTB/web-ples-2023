import { StyledImgWrapper } from './StyledImg.styled';

interface StyledImgInterface {
  mirrored?: boolean;
  src: any;
  alt: string;
}

const StyledImg: React.FC<StyledImgInterface> = ({ mirrored, src, alt }) => {
  return (
    <StyledImgWrapper
      mirrored={mirrored}
      src={src}
      alt={alt}
      className="reveal reveal-slow"
    />
  );
};

export default StyledImg;
