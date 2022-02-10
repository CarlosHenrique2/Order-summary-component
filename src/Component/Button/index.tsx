import react from "react";
import "./style.css";

interface ButtonProps {
  label: string;
  variant: "contained" | "outlined";
}

const Button: React.FC<ButtonProps> = ({ label, variant }) => {
  return <button className={`button--${variant}`}>{label}</button>;
};

export default Button;
