import react from "react";
import "./style.css";

interface ChangeProps {
  label: string;
}

const Change: React.FC<ChangeProps> = ({ label }) => {
  return <a href="">${label}</a>;
};

export default Change;
