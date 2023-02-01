import styled from 'styled-components';
import theme from '../../theme/theme';

export const OrganiserWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  padding-top: 1em;
  gap: 5em;
  align-items: center;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    flex-direction: column;
    padding-top: 3em;
    gap: 2em;
  }
`;

export const Link = styled.a`
  img {
    max-width: 100%;
    max-height: 70px;
    @media screen and (${theme.breakpoints.lteTabletQuery}) {
      width: 100%;
      transform: scale(0.7);
    }
  }
`;

export const LogoWrapper = styled.img`
  max-width: 100%;
  min-width: 300px;
  height: auto;
  display: block;
`;
