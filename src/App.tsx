import './App.css';
import Fold from './components/layout/Fold';
import Footer from './components/layout/footer/Footer';
import HamburgerMenu from './components/layout/navbar/hamburgerMenu/HamburgerMenu';
import Navbar from './components/layout/navbar/Navbar';
import { WrapperMain } from './components/layout/wrapper/Wrapper.styled';
import Contact from './sections/contact/Contact';
import Events from './sections/events/Events';
import Intro from './sections/intro/Intro';
import Organisers from './sections/organisers/Organisers';
import Partners from './sections/partners/Partners';
import Prime from './sections/prime/Prime';
import Countdown from './sections/countdown/Countdown';
import Program from './sections/program/Program';
import Tickets from './sections/tickets/Tickets';
import { LteTablet } from './theme/MediaQueries';

// import CookieConsent from 'react-cookie-consent';

import reveal from './functions/reveal';
window.addEventListener('scroll', reveal);

function App() {
  return (
    <WrapperMain>
      {/* <CookieConsent /> */}
      <Fold />
      <LteTablet>
        <HamburgerMenu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
      </LteTablet>
      <Navbar />
      <Prime />
      <Countdown endTime='2023-03-03T15:00:00' />
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
