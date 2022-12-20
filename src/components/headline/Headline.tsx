import React from "react";
import { Wrapper } from "./Headline.styled";

interface HeadlinePropsInterface {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  inverse?: boolean;
  card?: boolean;
}

const Headline: React.FC<HeadlinePropsInterface> = ({
  children,
  align = "left",
  inverse,
  card,
}) => {
  return (
    <Wrapper align={align} inverse={inverse} card={card}>
      {children}
    </Wrapper>
  );
};

export default Headline;
