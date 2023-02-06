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

export const OrganisersHeadline = styled.span`
  max-width: 80%;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h1}px;
  text-align: center;
  color: ${theme.colors.black};

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.h2}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    max-width: 90%;
    font-size: ${theme.fontSizeElements.h3}px;
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
