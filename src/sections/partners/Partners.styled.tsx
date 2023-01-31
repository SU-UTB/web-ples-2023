import styled from 'styled-components';
import theme from '../../theme/theme';

export const PartnerLogo = styled.div`
  margin: 3em;
  transition: all 0.1s ease-in-out;
  width: 10%;
  @media screen and (${theme.breakpoints.tabletQuery}) {
    margin: 1.5em;
    width: 12%;
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    margin: 1.5em;
    width: 25%;
  }
`;

export const PartnerImg = styled.img`
  width: 100%;
`;

export const PartnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
