import EventItem from '../../../types/TEvent';
import skate from '../../../assets/images/events/skate.png';
import film from '../../../assets/images/events/film.png';
import shoe from '../../../assets/images/events/shoe.png';
import glass from '../../../assets/images/events/glass.png';
import mirror from '../../../assets/images/events/mirror.png';

export const events: EventItem[] = [
  {
    name: 'Bruslení',
    date: '8. 2. 2023',
    image: `${skate}`,
    link: 'https://www.facebook.com/events/878795206724484',
  },
  {
    name: 'Tančírna',
    date: '14. 2. 2023',
    image: `${shoe}`,
    link: 'https://www.facebook.com/events/917395442610188',
  },
  {
    name: 'Cocktail workshop',
    date: '21. 2. 2023',
    image: `${glass}`,
    link: 'https://www.facebook.com/events/748784133130944',
  },
  {
    name: 'Promítání filmu',
    date: '28. 2. 2023',
    image: `${film}`,
    link: 'https://www.facebook.com/events/2507245799424680',
  },
  {
    name: 'Dámský salón',
    date: '3. 3. 2023',
    image: `${mirror}`,
    link: '/salony',
  },
];
