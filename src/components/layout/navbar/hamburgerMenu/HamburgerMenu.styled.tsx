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
    background: theme.colors.text,
  },
  bmBurgerBarsHover: {
    background: theme.colors.text,
  },
  bmCrossButton: {
    position: "absolute",
    right: "5%",
    top: "1.25em",
  },
  bmCross: {
    height: "30px",
    background: theme.colors.text,
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
    fill: theme.colors.text,
  },
  bmItem: {
    display: "block",
    margin: "1.5em 0",
    textDecoration: "none",
    color: theme.colors.text,
    fontFamily: theme.fonts.monsterRegular,
    transform: theme.animation.transitionBasic,
  },
  bmItemHover: {
    textDecoration: "none",
    color: theme.colors.text,
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};
