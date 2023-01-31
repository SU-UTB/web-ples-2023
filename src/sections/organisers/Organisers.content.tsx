import OrganiserItem from '../../types/TOrganiser';
import utb from '../../assets/images/logos/utb02.png';
import suLong from '../../assets/images/logos/suLong.svg';

export const organisers: OrganiserItem[] = [
  {
    name: 'UTB',
    link: 'https://www.utb.cz/',
    imgSrc: `${utb}`,
  },
  {
    name: 'SU Zlin',
    link: 'https://sunovy.utb.cz/',
    imgSrc: `${suLong}`,
  },
];
