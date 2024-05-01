import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  white: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  white,
  children,
}) => {
  const classes = `button font-code cursor-pointer relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-4 text-n-1  ${className || ""}`;

  const spanClass = "relative z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClass}>{children}</span>
      {<ButtonSvg white={white} />}
    </button>
  );

  return renderButton();
};

export default Button;
