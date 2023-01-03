const theme = {
  breakpoints: {
    xs: 446,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,

    mobileQuery: "max-width: 575px",
    gteMobileQuery: "min-width: 446px",

    tabletQuery: "min-width: 576px) and (max-width: 991px",
    gteTabletQuery: "min-width: 576x",
    lteTabletQuery: "max-width: 991px",

    desktopQuery: "min-width: 992px) and (max-width: 1399px",
    gteDesktopQuery: "min-width: 992px",
    lteDesktopQuery: "max-width: 1399px",

    gteDesktopLgQuery: "min-width: 1400px",
  },
  fonts: {
    heading: "Creative-Vintage-Draft",
    monsterRegular: "Monsterrat-Regular",
  },
  fontSizeElements: {
    h1: 48,
    h2: 36,
    h3: 28,
    h4: 22,
    h5: 18,
    paragraphDesktop: 18,
    paragraphTablet: 16,
    paragraphMobile: 14,
    caption: 10,
  },
  colors: {
    text: "black",
    background: "lightblue",
    inverse: "white",
  },
  animation: {
    transitionBasic: "all 0.3s ease",
  },
};

export default theme;
