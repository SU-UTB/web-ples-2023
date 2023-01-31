import theme from '../../../../theme/theme';

export const hamburgerStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '25px',
    height: '20px',
    right: '5%',
    top: '2em',
  },
  bmBurgerBars: {
    height: '10%',
    background: theme.colors.primary,
  },
  bmBurgerBarsHover: {
    background: theme.colors.primary,
  },
  bmCrossButton: {
    position: 'absolute',
    right: '5%',
    top: '1.25em',
  },
  bmCross: {
    height: '25px',
    background: theme.colors.primary,
  },
  bmCrossHover: {
    background: theme.colors.dark,
  },
  bmMenuWrap: {
    position: 'fixed',
    width: '100%',
  },
  bmMenu: {
    background: theme.colors.dark,
    paddingTop: '3em',
    paddingBottom: '1em',
    height: 'auto',
    textAlign: 'center',
    fontSize: theme.fontSizeElements.h5,
  },
  bmMorphShape: {
    fill: theme.colors.primary,
  },
  bmItem: {
    display: 'block',
    margin: '1.5em 0',
    textDecoration: 'none',
    color: theme.colors.primary,
    fontFamily: theme.fonts.heading,
    transform: theme.animation.transitionBasic,
  },
  bmItemHover: {
    textDecoration: 'none',
    color: theme.colors.primary,
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
};
