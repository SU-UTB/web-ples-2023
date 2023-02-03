import "./App.css";
import Fold from "./components/layout/Fold";
import Footer from "./components/layout/footer/Footer";
import HamburgerMenu from "./components/layout/navbar/hamburgerMenu/HamburgerMenu";
import Navbar from "./components/layout/navbar/Navbar";
import { WrapperMain } from "./components/layout/wrapper/Wrapper.styled";
import Contact from "./sections/contact/Contact";
import Events from "./sections/events/Events";
import Intro from "./sections/intro/Intro";
import Prime from "./sections/prime/Prime";
import Countdown from "./sections/countdown/Countdown";
import Program from "./sections/program/Program";
import Partners from "./sections/partners/Partners";
import Organisers from "./sections/organisers/Organisers";
import Tickets from "./sections/tickets/Tickets";
import { LteTablet } from "./theme/MediaQueries";
import Snowing from "./components/snowing/Snowing";
import Consent from "./components/consent/Consent";

import revealFrom from "./functions/reveal";
window.addEventListener("scroll", () => revealFrom(".reveal", 50));

import { getAnalytics, logEvent } from "firebase/analytics";
import { analyticsApp } from "./tools/firebase";
import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "./theme/theme";

const LoadingBackground = styled.div`
  z-index: 990;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  visibility: visible;
  opacity: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  background: linear-gradient(
    to bottom,
    ${theme.colors.dark},
    #4056b7,
    #b3cef2
  );
`;

const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
  align-items: center;
  justify-content: center;
  color: white;

  position: fixed;
  z-index: 990;

  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizeElements.h1}px;

  @media screen and (${theme.breakpoints.tabletQuery}) {
    font-size: ${theme.fontSizeElements.h2}px;
  }

  @media screen and (${theme.breakpoints.mobileQuery}) {
    font-size: ${theme.fontSizeElements.h3}px;
  }
`;

function App() {
  logEvent(getAnalytics(analyticsApp.app), "web_displayed");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const removeLoader = () => setLoading(false);
    window.addEventListener("load", removeLoader);

    return () => {
      window.removeEventListener("load", removeLoader);
    };
  }, []);

  const [visibleLoading, setVisibleLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLoading(!visibleLoading);
    }, 2000);

    return () => clearInterval(interval);
  }, [visibleLoading]);

  return (
    <>
      <LoadingBackground
        style={{
          opacity: loading ? 1 : 0,
          visibility: loading ? "visible" : "hidden",
          overflow: loading ? "" : "hidden",
        }}
      >
        <Loading
          style={{
            opacity: visibleLoading ? 1 : 0,
            transition: "opacity 2s",
          }}
        >
          Nahrávám...
        </Loading>
      </LoadingBackground>
      <WrapperMain
        style={{
          visibility: loading ? "hidden" : "visible",
          overflow: loading ? "hidden" : "",
        }}
      >
        <Consent />
        <Fold />
        <LteTablet>
          <HamburgerMenu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
        </LteTablet>
        <Navbar />
        <Snowing />
        <Prime />
        <Countdown endTime='2023-03-03T19:00:00' />
        <Intro />
        <Program />
        <Tickets />
        <Events />
        <Contact />
        <Partners />
        <Organisers />
        <Footer />
      </WrapperMain>
    </>
  );
}

export default App;
