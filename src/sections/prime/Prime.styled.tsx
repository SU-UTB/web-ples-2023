import styled from "styled-components";
import theme from "../../theme/theme";

export const PrimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35em;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    padding-top: 27em;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 3em;
  margin-top: 0.5em;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const Gap = styled.span`
  margin-left: 0.1em;
`;
