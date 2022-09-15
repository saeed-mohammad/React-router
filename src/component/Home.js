import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import video from "./Assets/space.mp4";
import "./style/Home.scss";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Hero />
      <Footer />
      <video src={video} type="video/mp4" autoPlay muted loop id="video"></video>
    </div>
  );
};

export default Home;
