import react from "react";
import SummaryCard from "../../Container/SummaryCard";
import backgroundDesktop from "../../assets/icon/pattern-background-desktop.svg";
import backgroundMobile from "../../assets/icon/pattern-background-mobile.svg";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <SummaryCard
        price="teste"
        change="teste"
        subTitle="teste"
        title="teste"
      />
    </div>
  );
};

export default Home;
