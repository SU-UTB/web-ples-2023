import "./App.css";
import Fold from "./components/layout/Fold";
import Footer from "./components/layout/footer/Footer";
import HamburgerMenu from "./components/layout/navbar/hamburgerMenu/HamburgerMenu";
import Navbar from "./components/layout/navbar/Navbar";
import { WrapperMain } from "./components/layout/wrapper/Wrapper.styled";
import Contact from "./sections/contact/Contact";
import Intro from "./sections/intro/Intro";
import Partners from "./sections/partners/Partners";
import Prime from "./sections/prime/Prime";
import Program from "./sections/program/Program";
import Tickets from "./sections/tickets/Tickets";
import { LteTablet } from "./theme/MediaQueries";

function App() {
  return (
    <WrapperMain>
      <Fold />
      <LteTablet>
        <HamburgerMenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </LteTablet>
      <Navbar />
      <Prime />
      <Intro />
      <Program />
      <Tickets />
      <Contact />
      <Partners />
      <Footer />
    </WrapperMain>
  );
}

export default App;
