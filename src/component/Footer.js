import React from "react";
import "./style/Footer.scss";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left">
          <div className="location">
            <FaSearchLocation size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div className="add">
              <p>123.Acme St.</p>
              <h4>Housten, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              1800-880-880
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              TripGalaxy@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae debitis maxime
            laudantium quae veniam optio modi laboriosam fuga illum quaerat, eum ratione
            iste, numquam ad, quis placeat suscipit velit! Veritatis?
          </p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
