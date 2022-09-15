import React from "react";
import Footer from "./Footer";
import HeroImage from "./HeroImage";
import Nav from "./Nav";
import "./style/Training.scss";
import Train from "./Train";

const Training = () => {
  return (
    <div>
      <Nav />
      <HeroImage heading={"TRAINING"} text={"Pre Flight & In-Flight Training"} />
      <Train />
      <Footer />
    </div>
  );
};

export default Training;
