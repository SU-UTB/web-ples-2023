/* @ts-ignore */
import { slide as Menu } from "react-burger-menu";
import theme from "../../../../theme/theme";

type PropsHamburgerMenu = {
  pageWrapId: string;
  outerContainerId: string;
};

var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "25px",
    height: "20px",
    right: "5%",
    top: "2em",
  },
  bmBurgerBars: {
    height: "10%",
    background: theme.colors.secondary,
  },
  bmBurgerBarsHover: {
    background: theme.colors.secondary,
  },
  bmCrossButton: {
    width: "30px",
    height: "30px",
  },
  bmCross: {
    height: "30px",
    background: theme.colors.secondary,
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
    paddingTop: "1em",
    paddingBottom: "1em",
    height: "auto",
    textAlign: "center",
    fontSize: theme.fontSizeElements.h5,
  },
  bmMorphShape: {
    fill: theme.colors.primary,
  },
  bmItem: {
    display: "block",
    margin: "1.5em 0",
    textDecoration: "none",
    color: theme.colors.secondary,
    fontFamily: theme.fonts.monsterRegular,
    transform: theme.animation.transitionBasic,
    position: "relative",
  },
  bmItemHover: {
    textDecoration: "none",
    color: theme.colors.primary,
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};

function HamburgerMenu({ pageWrapId, outerContainerId }: PropsHamburgerMenu) {
  return (
    <Menu
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
      styles={styles}
      right
      isOpen={false}
    >
      <a className="menu-item" href="#oplese">
        O plese
      </a>
      <a className="menu-item" href="#vstupenky">
        Vstupenky
      </a>
      <a className="menu-item" href="#program">
        Program
      </a>
      <a className="menu-item" href="#kontakt">
        Kontakt
      </a>
      <a className="menu-item" href="#partneri">
        Partneři
      </a>
    </Menu>
  );
}

export default HamburgerMenu;
