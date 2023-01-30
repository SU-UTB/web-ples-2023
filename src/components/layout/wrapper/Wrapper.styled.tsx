import styled, { css } from "styled-components";
import theme from "../../../theme/theme";
import backgroundWinter from "../../../assets/images/backgroundWinter.png";

export const WrapperMain = styled.main`
  font-family: ${theme.fonts.monsterRegular};
  background-image: url(${backgroundWinter});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    background-position: center 0;
  }
`;

export const WrapperSection = styled.div<{
  centered?: boolean;
  contact?: boolean;
}>(
  ({ centered, contact }) => css`
    display: flex;
    width: ${contact ? `100%` : `80%`};
    max-width: 1600px;
    margin: 0 auto 10em;
    gap: 3em;

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
  display: flex;
  flex-direction: column;
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
  @media screen and (${theme.breakpoints.lteTabletQuery}) {
    align-items: center;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 2em 0;
  color: ${theme.colors.primary};

  @media screen and (${theme.breakpoints.tabletQuery}) {
    grid-template-columns: repeat(3, 1fr);
    font-size: ${theme.fontSizeElements.paragraphGteTablet}px;
  }
  @media screen and (${theme.breakpoints.mobileQuery}) {
    grid-template-columns: repeat(2, 1fr);
    font-size: ${theme.fontSizeElements.paragraphMobile}px;
  }
`;
