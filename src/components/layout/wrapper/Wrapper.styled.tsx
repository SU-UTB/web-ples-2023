import styled, { css } from "styled-components";
import theme from "../../../theme/theme";

export const WrapperMain = styled.div<{
  background?: boolean;
}>(
  ({ background }) => css`
    font-family: ${theme.fonts.monsterRegular};
    padding: 5rem 0;

    ${background &&
    css`
      background-color: ${theme.colors.background};
    `}

    @media screen and (${theme.breakpoints.lteTabletQuery}) {
      padding: 1rem 0;
    }
  `
);

export const WrapperSection = styled.div<{
  centered?: boolean;
}>(
  ({ centered }) => css`
    display: flex;
    width: 90%;
    max-width: 1600px;
    margin: 0 auto;
    gap: 3rem;
    background-color: lightgray;
    ${centered &&
    css`
      gap: 1rem;
      align-items: center;
      flex-direction: column;
    `}

    @media screen and (${theme.breakpoints.lteTabletQuery}) {
      flex-direction: column;
      gap: 0;
    }
  `
);

export const WrapperHalf = styled.div`
  width: 50%;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    width: 100%;
  }
`;

export const WrapperCentered = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 2rem;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    align-items: center;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  max-width: 90%;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 2em;
  background-color: yellow;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 70%;
    font-size: ${theme.fontSizeElements.paragraphTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 90%;
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;
