import EventItem from "../../types/TEvent";
import skate from "../../assets/images/skate.png";
import film from "../../assets/images/film.png";
import shoe from "../../assets/images/shoe.png";
import glass from "../../assets/images/glass.png";
import mirror from "../../assets/images/mirror.png";

export const events: EventItem[] = [
  {
    name: "Bruslení",
    date: "22. 2. 2023",
    image: `${skate}`,
  },
  {
    name: "Promítání filmu",
    date: "22. 2. 2023",
    image: `${film}`,
  },
  {
    name: "Tančírna",
    date: "22. 2. 2023",
    image: `${shoe}`,
  },
  {
    name: "Cocktail workshop",
    date: "22. 2. 2023",
    image: `${glass}`,
  },
  {
    name: "Líčírna & Barber",
    date: "22. 2. 2023",
    image: `${mirror}`,
  },
];
