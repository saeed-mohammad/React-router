import React from "react";
import "./style/Train.scss";
import pod from "./Assets/pod.jpg";
import moon from "./Assets/moon.jpg";
import { Link } from "react-router-dom";

const Train = () => {
  return (
    <div className="Train">
      <div className="left">
        <h1>Training</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptas.</p>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img top">
            <img src={pod} alt="" className="img1" />
          </div>
          <div className="img bottom">
            <img src={moon} alt="" className="img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Train;
