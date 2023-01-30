import EventItem from '../../types/TEvent';
import skate from '../../assets/images/skate.png';
import film from '../../assets/images/film.png';
import shoe from '../../assets/images/shoe.png';
import glass from '../../assets/images/glass.png';
import mirror from '../../assets/images/mirror.png';

export const events: EventItem[] = [
  {
    name: 'Bruslení',
    date: '8. 2. 2023',
    image: `${skate}`,
  },
  {
    name: 'Tančírna',
    date: '14. 2. 2023',
    image: `${shoe}`,
  },
  {
    name: 'Cocktail workshop',
    date: '21. 2. 2023',
    image: `${glass}`,
  },
  {
    name: 'Promítání filmu',
    date: '28. 2. 2023',
    image: `${film}`,
  },
  {
    name: 'Dámský salón',
    date: '3. 3. 2023',
    image: `${mirror}`,
  },
];
