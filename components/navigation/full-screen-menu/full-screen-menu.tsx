import { motion } from "framer-motion"
import { menuSlide } from "./animation"
import Curve from "./curve"
import Profile from "@/components/ui/profile";
import NavLink from "./nav-link";
import Link from "next/link";
import MenuCard from "./menu-card";
import { FC, useState } from "react";

const FullScreenMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    setIsOpen(true);
  };

  return (
    isOpen && (
      <motion.div 
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-mono"
      >
        <div className="relative w-full pl-[5%]">
          {/* Profile */}
          <div className="absolute top-8">
            <Profile />
          </div>
        </div>
        {/* Menu and card */}
        <div className="absolute bottom-32 w-full lg:px-[5%]">
          <div 
            className="grid relative"
            style={{ gridTemplateColumns: "1fr 500px" }}
          >
            <div className="pl-4 flex flex-col justify-end">
              {navItems.map((item, index) => (
                <NavLink 
                  key={index} 
                  data={{ ...item, index }} 
                  onClick={handleClose} 
                />
              ))}
            </div>
            {/* Menu about card */}
            <MenuCard />
          </div>
        </div>
        {/* Curve svg effect */}
        <Curve />
      </motion.div>
    )
  );
};

const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Featured",
    href: "#featured",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default FullScreenMenu;