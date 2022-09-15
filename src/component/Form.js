import React from "react";
import "./style/Form.scss";
const Form = () => {
  return (
    <div className="Form">
      <form action="">
        <label htmlFor="">Your Name </label>
        <input type="text" placeholder="firstName" required />
        <label htmlFor="">Email </label>
        <input type="email" placeholder="Email-id" required />
        <label htmlFor="">Subject </label>
        <input type="text" />
        <label htmlFor="">Details</label>
        <textarea name="" id="" rows="6" placeholder="Type short message here"></textarea>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default Form;
