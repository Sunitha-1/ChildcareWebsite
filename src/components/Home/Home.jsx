import React from "react";
import "./Home.css";
import arrow_icon from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Your child safety on us</h1>
        <Link to="./reports">
          <button className="btn">
            Explore more <img src={arrow_icon} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
