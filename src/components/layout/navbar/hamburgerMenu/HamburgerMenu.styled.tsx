import theme from "../../../../theme/theme";

export const hamburgerStyles = {
  bmBurgerButton: {
    position: "absolute",
    width: "25px",
    height: "20px",
    right: "5%",
    top: "2em",
  },
  bmBurgerBars: {
    height: "10%",
    background: theme.colors.light,
  },
  bmBurgerBarsHover: {
    background: theme.colors.light,
  },
  bmCrossButton: {
    position: "absolute",
    right: "5%",
    top: "1.25em",
  },
  bmCross: {
    height: "30px",
    background: theme.colors.light,
  },
  bmCrossHover: {
    background: theme.colors.background,
  },
  bmMenuWrap: {
    position: "fixed",
    width: "100%",
  },
  bmMenu: {
    background: theme.colors.background,
    paddingTop: "3em",
    paddingBottom: "1em",
    height: "auto",
    textAlign: "center",
    fontSize: theme.fontSizeElements.h4,
  },
  bmMorphShape: {
    fill: theme.colors.light,
  },
  bmItem: {
    display: "block",
    margin: "1.5em 0",
    textDecoration: "none",
    color: theme.colors.light,
    fontFamily: theme.fonts.monsterRegular,
    transform: theme.animation.transitionBasic,
  },
  bmItemHover: {
    textDecoration: "none",
    color: theme.colors.light,
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};
