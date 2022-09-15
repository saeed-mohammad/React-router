import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import HeroImage from "./HeroImage";
import "./style/Contact.scss";
import Form from "./Form";
const Contact = () => {
  return (
    <div>
      <Nav />
      <HeroImage heading={"CONTACT"} text={"Pre Flight & In-Flight Training"} />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
