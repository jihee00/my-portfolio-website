import { motion } from "framer-motion"
import { menuSlide } from "./animation"
import Curve from "./curve"

export default function FullScreenMenu() {
  return (
  <motion.div 
  variants={menuSlide}
  initial="initial"
  animate="enter"
  exit="exit"
  className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-roboto"
  >
  {/*Curve svg effect*/}
  <Curve />
  </motion.div>
  );
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Featured",
    href: "/#featured",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];