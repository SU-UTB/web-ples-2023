import OrganiserItem from '../../types/TOrganiser';
import utb from '../../assets/images/logos/utb.svg';
import su from '../../assets/images/logos/suCut.png';

export const organisers: OrganiserItem[] = [
  {
    name: 'UTB',
    link: 'https://www.utb.cz/',
    imgSrc: `${utb}`,
  },
  {
    name: 'SU Zlin',
    link: 'https://sunovy.utb.cz/',
    imgSrc: `${su}`,
  },
];
