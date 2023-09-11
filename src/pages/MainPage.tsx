import '../App.css';

import { getAnalytics, logEvent } from 'firebase/analytics';
import { analyticsApp } from '../tools/firebase';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';
import revealFrom from '../functions/reveal';
import { LteTablet } from '../theme/MediaQueries';
import Prime from '../sections/mainpage/prime/Prime';
import Countdown from '../sections/mainpage/countdown/Countdown';
import Intro from '../sections/mainpage/intro/Intro';
import Program from '../sections/mainpage/program/Program';
import Tickets from '../sections/mainpage/tickets/Tickets';
import Events from '../sections/mainpage/events/Events';
import Contact from '../sections/mainpage/contact/Contact';
import Partners from '../sections/mainpage/partners/Partners';
import Organisers from '../sections/mainpage/organisers/Organisers';
import Snowing from '../components/snowing/Snowing';
import { WrapperMain } from '../components/layout/wrapper/Wrapper.styled';
import Fold from '../components/layout/Fold';
import HamburgerMenu from '../components/layout/navbar/hamburgerMenu/HamburgerMenu';
import Navbar from '../components/layout/navbar/Navbar';
import Footer from '../components/layout/footer/Footer';
import CookieConsent from '../components/consent/Consent';

window.addEventListener('scroll', () => revealFrom('.reveal', 50));

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

  -webkit-transition: 1s all;
  -o-transition: 1s all;
  transition: 1s all;
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;

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

function MainPage() {
  logEvent(getAnalytics(analyticsApp.app), 'web_displayed');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const removeLoader = () => setLoading(false);

    if (localStorage.getItem('pageLoaded') !== 'true') {
      window.addEventListener('load', removeLoader);
      localStorage.setItem('pageLoaded', 'true');
    } else {
      setLoading(false);
    }

    return () => {
      window.removeEventListener('load', removeLoader);
    };
  }, []);

  const [visibleLoading, setVisibleLoading] = useState(true);

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
          visibility: loading ? 'visible' : 'hidden',
          overflow: loading ? '' : 'hidden',
        }}
      >
        <Loading
          style={{
            opacity: visibleLoading ? 1 : 0,
            transition: 'opacity 2s',
          }}
        >
          Nahrávám...
        </Loading>
      </LoadingBackground>
      <WrapperMain
        style={{
          visibility: loading ? 'hidden' : 'visible',
          overflow: loading ? 'hidden' : '',
        }}
      >
        <CookieConsent />
        <Fold />
        <LteTablet>
          <HamburgerMenu
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
          />
        </LteTablet>
        <Navbar />
        <Snowing />
        <Prime />
        <Countdown endTime="2023-03-03T19:00:00" />
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

export default MainPage;
