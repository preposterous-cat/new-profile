import {
  FaBook,
  FaHouseChimney,
  FaMessage,
  FaPersonCircleQuestion,
} from "react-icons/fa6";

const menu_data = [
  {
    name: "Home",
    link: "/",
    icon: <FaHouseChimney />,
  },
  {
    name: "About",
    link: "/about",
    icon: <FaPersonCircleQuestion />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <FaMessage />,
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: <FaBook />,
  },
];

export default menu_data;
