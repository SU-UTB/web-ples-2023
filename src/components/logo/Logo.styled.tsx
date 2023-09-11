import styled from 'styled-components';
import theme from '../../theme/theme';

export const WrapperLogo = styled.div`
  text-align: left;
  margin-right: 6em;
`;

export const Link = styled.a`
  img {
    max-width: 250px;

    @media screen and (${theme.breakpoints.lteTabletQuery}) {
      max-width: 150px;
    }
  }
`;
