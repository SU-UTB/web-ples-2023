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

function App() {
  logEvent(getAnalytics(analyticsApp.app), "web_displayed");
  return (
    <WrapperMain>
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
  );
}

export default App;
