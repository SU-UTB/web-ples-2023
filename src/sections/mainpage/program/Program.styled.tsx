import styled from 'styled-components';
import theme from '../../../theme/theme';

export const ProgramHeadline = styled.span`
  max-width: 80%;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizeElements.h1}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.h2}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    max-width: 90%;
    font-size: ${theme.fontSizeElements.h3}px;
  }
`;

export const Moderator = styled.p`
  font-size: ${theme.fontSizeElements.h4}px;
  text-align: justify;

  line-height: 1.5;
  color: ${theme.colors.primary};

  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const WrapperTimeline = styled.div`
  position: relative;
  color: ${theme.colors.primary};
`;

export const Row = styled.div`
  display: flex;
  gap: 2em;
  margin: 0 1em 0.7em 0;
  font-size: ${theme.fontSizeElements.h4}px;

  @media screen and (${theme.breakpoints.desktopQuery}) {
    line-height: 0.7;
  }
  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    gap: 1em;
    margin: 0 0em 0.7em 0em;
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const Time = styled.div`
  min-width: 4em;
  text-align: right;
  font-weight: bold;
`;

export const Activity = styled.div`
  text-align: left;
`;

export const ChangeReserved = styled.div`
  margin-top: 2em;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.monsterRegular};
  font-style: italic;
  font-size: ${theme.fontSizeElements.paragraphMobile}px;

  @media screen and (${theme.breakpoints.mobileQuery}) {
    margin-top: 2em;
    font-size: ${theme.fontSizeElements.caption}px;
  }
`;
