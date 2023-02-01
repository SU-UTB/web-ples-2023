import { CookieConsent as Consent, Cookies } from 'react-cookie-consent';
import { LteTabletCheck } from '../../theme/MediaQueries';
import theme from '../../theme/theme';

const CookieConsent = () => {
  const handleAccept = () => {
    Cookies.set('cookie-consent', true, { expires: 150 });
  };

  return (
    <Consent
      location='bottom'
      buttonText='Rozumím'
      cookieName='cookie-consent'
      style={{
        fontSize: `${LteTabletCheck() ? '12px' : '14px'}`,
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
    </Consent>
  );
};

export default CookieConsent;
