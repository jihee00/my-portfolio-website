import { FC, ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon: ReactNode;
  onClick?: () => void;
}

const FancyButton:FC<ButtonProps> = ({text, icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick} 
      className="fancy-btn"
    >
      <div
        className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black 
        rounded-[108em] py-5 px-10 flex items-center gap-2 font-semibold text-2xl cursor-pointer transition-all duration-75"
      >
        <span>{text}</span>
        <span className="group-hover:translate-x-[.75vw] transition-transform duration-100">
          {icon}
        </span>
      </div>
    </button>
  );
};
export default FancyButton;