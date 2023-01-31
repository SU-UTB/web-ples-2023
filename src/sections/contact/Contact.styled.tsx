import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

export const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const WrapperContactItem = styled.div`
  display: flex;
  margin-bottom: 2em;
  line-height: 1.5em;
  gap: 2em;
  font-size: ${theme.fontSizeElements.paragraphGteTablet}px;

  color: ${theme.colors.dark};
  @media screen and (${theme.breakpoints.gteDesktopLgQuery}) {
    color: ${theme.colors.primary};
  }
  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    gap: 1em;
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const ContactHalf = styled.span`
  display: flex;
  flex-direction: column;
  width: 50%;
  &:nth-child(1) {
    align-items: flex-end;
  }
  div {
    &:nth-child(1) {
      font-weight: bold;
    }
  }
`;

export const ContactItem = styled.div``;

export const ContactAction = styled.a<{
  tickets?: boolean;
}>(
  ({ tickets }) => css`
    ${tickets &&
    css`
      color: white !important;
    `}

    color: ${theme.colors.dark};

    @media screen and (${theme.breakpoints.gteDesktopLgQuery}) {
      color: ${theme.colors.primary};
    }
  `
);
