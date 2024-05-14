"use client";
import {
  NavigationProvider,
  useNavigationContext,
} from "@/context/navigation-context";
import { motion } from "framer-motion";

const RootTemplate = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      style={{ overflowY: "hidden" }}
    >
      {children}
    </motion.main>
  );
};

export default RootTemplate;
