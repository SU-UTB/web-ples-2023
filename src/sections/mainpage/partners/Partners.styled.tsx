import styled from 'styled-components';
import theme from '../../../theme/theme';

export const GeneralPartnerLogo = styled.div`
  max-width: 250px;
  width: 100%;
  height: auto;
  margin: 1em auto 4em;
  @media screen and (${theme.breakpoints.tabletQuery}) {
    max-width: 200px;
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    max-width: 150px;
  }
`;

export const PartnerLogo = styled.div`
  margin: 1em 3em;
  width: 150px;
  height: auto;
  @media screen and (${theme.breakpoints.tabletQuery}) {
    max-width: 130px;
    margin: 1.5em;
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    max-width: 100px;
    margin: 1.5em;
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
