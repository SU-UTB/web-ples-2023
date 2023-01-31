import { useState } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { LteTabletCheck } from '../../theme/MediaQueries';
import theme from '../../theme/theme';

const Consent = () => {
  const [accepted, setAccepted] = useState<boolean>(false);

  const handleAccept = () => {
    setAccepted(true);
    Cookies.set('cookie-consent', true, { expires: 150 });
  };

  return (
    <>
      {!accepted && (
        <CookieConsent
          location='bottom'
          buttonText='Rozumím'
          cookieName='cookie-consent'
          style={{
            fontSize: `${LteTabletCheck() ? '10px' : '14px'}`,
            background: `${theme.colors.dark}`,
          }}
          buttonStyle={{
            background: `${theme.colors.ice}`,
            color: `${theme.colors.black}`,
            marginTop: `${LteTabletCheck() && '0px'}`,
            fontSize: `${LteTabletCheck() ? '10px' : '12px'}`,
          }}
          expires={150}
          onAccept={handleAccept}
        >
          Tyto webové stránky používají soubory cookie ke zlepšení uživatelského
          zážitku
        </CookieConsent>
      )}
    </>
  );
};

export default Consent;
