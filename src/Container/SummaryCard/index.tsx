import Button from "../../Component/Button";
import Typography from "../../Component/Typography";
import img from "../../assets/icon/illustration-hero.svg";
import music from "../../assets/icon/icon-music.svg";

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
      <div className="summaryCard__content">
        <Typography label="Order Summary" variant="title" />
        <Typography
          label="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
          variant="paragraph"
        />
        <div className="summaryCard__content__billing_info">
          <img src={music} alt="" />
          <div className="summaryCard__content__billing_info__description">
            <Typography label="Annual Plan" variant="subtitle" />
            <Typography label="$59.99/year" variant="paragraph" />
          </div>
          <a className="summaryCard__link" href="#">
            Change
          </a>
        </div>
        <div className="summaryCard__button">
          <Button variant="contained" label="Proceed to Payment" />
          <Button variant="outlined" label="Cancel Order" />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
