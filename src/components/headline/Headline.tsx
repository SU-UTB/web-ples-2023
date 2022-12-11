import React from "react";
import { Wrapper } from "./Headline.styled";

interface HeadlinePropsInterface {
  tag?: React.ElementType | keyof JSX.IntrinsicElements;
  level?: number | string;
  gap?: number;
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  inverse?: boolean;
  font?: "clash" | "poppins";
}

const Headline: React.FC<HeadlinePropsInterface> = ({
  tag,
  level,
  children,
  align = "left",
  inverse,
  font,
}) => {
  return (
    <Wrapper
      as={tag || `h${level}`}
      level={`h${level}`}
      align={align}
      inverse={inverse}
      font={font}
    >
      {children}
    </Wrapper>
  );
};

export default Headline;
