import React from "react";
import "./style/Hero.scss";
import Typed from "react-typed";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <p className="grn">Growing With Data Analytics</p>
        <h2>Grow With Data!</h2>
        <div>
          <p>Flex,flexible financing for</p>
          <Typed strings={["BTB", "BTC", "SASS"]} typeSpeed={120} backSpeed={130} loop />
        </div>
        <p className="para">Moniter your data to increase revenue for BTB,BTC and SASS</p>
      </div>
    </section>
  );
};

export default Hero;
