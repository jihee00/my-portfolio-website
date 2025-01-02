import { FC } from "react"
import { motion } from 'framer-motion'
import { slide } from "./animation"
import Link from "next/link"
import { scale } from "./animation"

interface NavLinkProps {
  data:{
    title: string;
    href: string;
    index: number;
  };
}

const NavLink: FC<NavLinkProps> = ({ data }) => {
  const { title, href, index } = data;
  return <motion.div className="relative flex items-center" variants={slide} custom={index} initial="initial" animate="enter" exit="exit">
    <motion.div variants={scale} className="hidden"></motion.div>
    <Link href={href} className="text-[6vw] uppercase leading-[96%] font-bold">
    {title}
    </Link>
  </motion.div>;
};

export default NavLink;