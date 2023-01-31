import styled, { css, ThemeConsumer } from 'styled-components';
import theme from '../../../theme/theme';

export const Subheadline = styled.div<{
  colorMode?: 'white' | 'black';
}>(
  ({ colorMode }) => css`
    font-family: ${theme.fonts.heading};
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 2em;
    font-size: ${theme.fontSizeElements.h3}px;
    color: ${theme.colors.primary};

    @media screen and (${theme.breakpoints.tabletQuery}) {
      font-size: ${theme.fontSizeElements.h4}px;
    }
    @media screen and (${theme.breakpoints.mobileQuery}) {
      font-size: ${theme.fontSizeElements.h5}px;
    }
  `
);
