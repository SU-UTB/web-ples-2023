import styled from 'styled-components';
import theme from '../../theme/theme';

export const ProgramCard = styled.a`
  display: block;
  padding: 1em;
  margin: 0.75em;
  text-align: center;
  background-color: ${theme.colors.dark};
  border-radius: 0.5em;
  box-shadow: 0px 2px 2px 2px ${theme.colors.ice};
  &:hover {
    cursor: pointer;
    transition: all 0.1s ease-in-out !important;
    margin: 0.5em;
  }
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    margin: 0.5em;
  }
`;

export const CardText = styled.div`
  margin-bottom: 1em;
`;

export const CardImageWrapper = styled.img`
  width: 100%;
`;
