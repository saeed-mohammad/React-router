import React from "react";
import "./style/HeroImage.scss";
const HeroImage = (props) => {
  return (
    <div className="heroImg">
      <div className="content">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImage;
