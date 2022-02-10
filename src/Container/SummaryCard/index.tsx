import react from "react";
import Button from "../../Component/Button";
import Change from "../../Component/Change";
import Typography from "../../Component/Typography";
import img from "../../asseats/icon/illustration-hero.svg";
import music from "../../asseats/icon/icon-music.svg";

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
    <div className="summaryCard">
      <div className="summaryCard__image">
        <img src={img} alt="" />
      </div>
      <div>
        <Typography label="Order Summary" variant="title" />
      </div>
      <div className="">
        <img src="" alt="" />
        <Typography
          label="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
          variant="paragraph"
        />
        <Typography label="Annual Plan" variant="subtitle" />
        <Typography label="$59.99/year" variant="paragraph" />
        <a href="">Change</a>
        <img src={music} alt="" />
      </div>
      <div className="summaryCard__button">
        <Button label="Proceed to Payment" />
        <Button label="Cancel Order" />
      </div>
    </div>
  );
};

export default SummaryCard;
