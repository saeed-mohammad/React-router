import React from "react";
import "./style/Price.scss";
import { Link } from "react-router-dom";
const Price = () => {
  return (
    <div className="price">
      <div className="card_container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">BTC 1</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quaters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">BTC 1</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quaters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">BTC 1</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quaters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">BTC 1</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quaters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Price;
