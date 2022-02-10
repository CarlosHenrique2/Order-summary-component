import react from "react";

import "./style.css";

interface TypographyProps {
  label: string;
  variant: "paragraph" | "subtitle" | "title";
}

const Typography: React.FC<TypographyProps> = ({ label, variant }) => {
  let content = null;
  if (variant === "title") {
    return <h1 className={"title-"}>{label}</h1>;
  }
  if (variant === "subtitle") {
    return <p className={"subtitle-"}>{label}</p>;
  }
  return <p className={"paragraph-"}>{label}</p>;
};

export default Typography;
