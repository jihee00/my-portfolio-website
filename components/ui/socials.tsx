import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "./button";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">
            {social.icon}
          </span>
        </Button>
      ))}
    </div>
  );
}



const socials = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    link: "https://github.com/jihee00",
    username: "Jihee Kim",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/jihee-kim-8332731a9/",
    username: "Jihee Kim",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: "https://www.instagram.com/j._.creates",
    username: "Jihee Kim",
  },
];