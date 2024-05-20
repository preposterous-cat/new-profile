import {
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
} from "react-icons/si";

const skills = [
  {
    icon: <SiJavascript />,
    name: "Javascript",
    level: "Intermediate",
  },
  { icon: <SiPhp />, name: "PHP", level: "Intermediate" },
  { icon: <SiPython />, name: "Python", level: "Basic" },
  { icon: <SiLaravel />, name: "Laravel", level: "Intermediate" },
  { icon: <SiReact />, name: "ReactJs", level: "Basic" },
  { icon: <SiNextdotjs />, name: "NextJs", level: "Basic" },
  { icon: <SiMysql />, name: "MySQL", level: "Intermediate" },
];

export default skills;
