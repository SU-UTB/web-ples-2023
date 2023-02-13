import { logEvent, getAnalytics } from 'firebase/analytics';
import { GteDesktop } from '../../../theme/MediaQueries';
import { analyticsApp } from '../../../tools/firebase';
import { navbarItems } from './Navbar.content';
import { MenuWrapper, MenuItem } from './Navbar.styled';

function Navbar() {
  return (
    <GteDesktop>
      <MenuWrapper>
        {navbarItems.map((item, index) => (
          <MenuItem
            key={index}
            href={item.tag}
            onClick={() =>
              logEvent(getAnalytics(analyticsApp.app), 'nav_clicked', {
                name: item.tag,
              })
            }
          >
            {item.text}
          </MenuItem>
        ))}
      </MenuWrapper>
    </GteDesktop>
  );
}

export default Navbar;
