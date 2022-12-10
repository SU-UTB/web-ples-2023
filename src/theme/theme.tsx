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
  // TODO: import fonts (.woff)
  // TODO: create fontface for each font in index.css
  fonts: {
    body: "Clash-Display-Regular",
    heading: "Clash-Display-Medium",
    description: "Poppins-Regular",
    poppinsRegular: "Poppins-Regular",
    poppinsMedium: "Poppins-Medium",
    poppinsBold: "Poppins-Bold",
    clashRegular: "Clash-Display-Regular",
    clashMedium: "Clash-Display-Medium",
    clashBold: "Clash-Display-Bold",
  },
  fontSizeElements: {
    h1: 48,
    h2: 36,
    h3: 28,
    h4: 22,
    h5: 18,
    h6: 16,
    h1phone: 14,
    h2phone: 12,
    h3phone: 10,
    caption: 8,
  },
  colors: {
    text: "#ffffff",
    subtitle: "#bebebe",
    border: "#ffffff",
    background: "#000000",
    primary: "#ffb22c",
    primaryActive: "#fff500",
    danger: "#e42528",
    hamburger: "#1d1d1d",
  },
  animation: {
    transitionBasic: "all 0.3s ease",
  },
};

export default theme;
