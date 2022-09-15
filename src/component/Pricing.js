import React from "react";
import Footer from "./Footer";
import HeroImage from "./HeroImage";
import Nav from "./Nav";
import Price from "./Price";
import "./style/Pricing.scss";
const Pricing = () => {
  return (
    <div>
      <Nav />
      <HeroImage heading={"PRICING"} text={"Choose Your Trip"} />
      <Price />
      <Footer />
    </div>
  );
};

export default Pricing;
