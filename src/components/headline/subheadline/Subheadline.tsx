import React from "react";
import { Wrapper } from "./Subheadline.styled";

interface HeadlinePropsInterface {
  children: React.ReactNode;
  inverse?: boolean;
}

const Subheadline: React.FC<HeadlinePropsInterface> = ({
  children,
  inverse,
}) => {
  return <Wrapper inverse={inverse}>{children}</Wrapper>;
};

export default Subheadline;
