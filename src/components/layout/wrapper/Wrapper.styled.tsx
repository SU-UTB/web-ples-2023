import styled from "styled-components";
import theme from "../../../theme/theme";

export const WrapperMain = styled.div`
  display: flex;
  width: 95%;
  max-width: 1600px;
  margin: 2rem auto;
`;

export const WrapperSection = styled.div`
  display: flex;
  margin-bottom: 2rem;
  gap: 3rem;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    flex-direction: column;
  }
`;

export const WrapperColumn = styled.div`
  width: 50%;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    width: 100%;
  }
`;

export const WrapperCentered = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
