import styled from "styled-components";
import theme from "../../theme/theme";

export const PrimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30em;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    padding-top: 20em;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 3em;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const Gap = styled.span`
  margin-left: 0.2em;
`;
