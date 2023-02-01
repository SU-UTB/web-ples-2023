import styled from 'styled-components';
import theme from '../../theme/theme';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 1em;

  @media screen and (${theme.breakpoints.mobileQuery}) {
    gap: 0.5em;
  }
`;

export const EventCard = styled.a`
  position: relative;
  min-width: 260px;
  width: 15%;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: rgba(23, 21, 71, 0.5);
  text-align: center;
  text-decoration: none;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    min-width: 180px;
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    min-width: 120px;
    padding: 0.5 0;
  }
`;

export const CardText = styled.div`
  color: ${theme.colors.primary};
  margin-bottom: 1em;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;
