import styled, { css } from 'styled-components';
import theme from '../../../theme/theme';

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
  font-size: ${theme.fontSizeElements.h4}px;
  align-items: center;

  color: ${theme.colors.black};
  @media screen and (${theme.breakpoints.gteDesktopLgQuery}) {
    color: ${theme.colors.primary};
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    gap: 1em;
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;

export const ContactHalf = styled.span`
  display: flex;
  flex-direction: column;
  width: 45%;
  @media screen and (${theme.breakpoints.gteDesktopQuery}) {
    white-space: nowrap;
  }
  &:nth-child(1) {
    align-items: flex-end;
    text-align: end;
  }
  div {
    &:nth-child(1) {
      font-weight: bold;
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
`;

export const ContactAction = styled.a<{
  tickets?: boolean;
}>(
  ({ tickets }) => css`
    color: ${theme.colors.black};

    ${tickets &&
    css`
      color: white;
    `}

    @media screen and (${theme.breakpoints.gteDesktopLgQuery}) {
      color: ${theme.colors.primary};
    }
  `
);
