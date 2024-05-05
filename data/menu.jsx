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
    link: "/",
    icon: <FaPersonCircleQuestion />,
  },
  {
    name: "Contact",
    link: "/",
    icon: <FaMessage />,
  },
  {
    name: "Portfolio",
    link: "/",
    icon: <FaBook />,
  },
];

export default menu_data;
