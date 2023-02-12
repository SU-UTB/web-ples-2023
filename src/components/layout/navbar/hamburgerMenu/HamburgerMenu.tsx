/* @ts-ignore */
import { getAnalytics, logEvent } from 'firebase/analytics';
import { slide as Menu } from 'react-burger-menu';
import { analyticsApp } from '../../../../tools/firebase';
import { navbarItems } from '../Navbar.content';
import { hamburgerStyles } from './HamburgerMenu.styled';

type PropsHamburgerMenu = {
  pageWrapId: string;
  outerContainerId: string;
};

function HamburgerMenu({ pageWrapId, outerContainerId }: PropsHamburgerMenu) {
  return (
    <Menu
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
      styles={hamburgerStyles}
      right
      isOpen={false}
    >
      {navbarItems.map((item, index) => (
        <a
          key={index}
          href={item.tag}
          onClick={() =>
            logEvent(getAnalytics(analyticsApp.app), 'hamburger_clicked', {
              name: item.tag,
            })
          }
        >
          {item.text}
        </a>
      ))}
    </Menu>
  );
}

export default HamburgerMenu;
