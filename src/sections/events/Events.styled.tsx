import styled from 'styled-components';
import theme from '../../theme/theme';

export const ProgramCard = styled.a`
  padding: 1em;
  margin: 0.75em;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 0.5em;
  box-shadow: 0px 5px 10px 2px ${theme.colors.ice};
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
