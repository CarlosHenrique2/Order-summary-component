import react from "react";
import Button from "../../Component/Button";
import Change from "../../Component/Change";
import Typography from "../../Component/Typography";
/* import icon from "../../asseats/icon/pattern-background-desktop.svg"; */

import "./style.css";

export interface SummaryCardProbs {
  change: string;
  price: string;
  subTitle: string;
  title: string;
}

const SummaryCard: React.FC<SummaryCardProbs> = ({
  change,
  price,
  subTitle,
  title,
}) => {
  return (
    <div className="conteiner__summaryCard">
      <div className="conteiner__summaryCard__content">
        <img src="../" alt="" />
      </div>
      <div>
        <h1></h1>
        <p>${}</p>
      </div>
      <div className="">
        <img src="" alt="" />
        <p>Annual Plan</p>
        <p>${}/year</p>
        <a href="">${}</a>
      </div>
      <div className="">
        <Button label="Proceed" />
        <Button label="Cancel" />
      </div>
    </div>
  );
};

export default SummaryCard;
