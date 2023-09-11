import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

export const ParagraphWrapper = styled.p<{
  colorMode?: 'white' | 'black' | 'ice';
  align?: boolean;
  program?: boolean;
}>(
  ({ colorMode = 'white', align, program }) => css`
    font-size: ${theme.fontSizeElements.h4}px;
    text-align: justify;

    line-height: 1.5;

    color: ${colorMode === 'ice' ? `${theme.colors.ice}` : `${colorMode}`};

    ${program &&
    css`
      margin: 10em;
    `};

    @media screen and (${theme.breakpoints.lteTabletQuery}) {
      ${align &&
      css`
        text-align: center;
      `};
    }

    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.paragraphMobile}px;
    }
  `,
);
