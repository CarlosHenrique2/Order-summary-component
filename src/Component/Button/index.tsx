import react from "react";
import "./style.css";


interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return <button className="">${label}</button>
}

export default Button;