import OrganiserItem from "../../types/TOrganiser";
import utb from "../../assets/images/logos/utb.svg";
import suLong from "../../assets/images/logos/suLong.svg";
import usuh from "../../assets/images/logos/usuh.svg";

export const organisers: OrganiserItem[] = [
  {
    name: "UTB",
    link: "https://www.utb.cz/",
    imgSrc: `${utb}`,
  },
  {
    name: "SU Zlin",
    link: "https://sunovy.utb.cz/",
    imgSrc: `${suLong}`,
  },
  {
    name: "USUH UTB",
    link: "https://www.facebook.com/UnieStudentuUH/",
    imgSrc: `${usuh}`,
  },
];
