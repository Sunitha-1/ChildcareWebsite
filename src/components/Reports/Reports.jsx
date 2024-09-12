import React from "react";
import "./Reports.css";
import arrow_icon from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div className="reports container">
      <div className="reports-text">
        <h1>Reports</h1>
        <br></br>
        <Link to="/students">
          <button className="btn">
            Children Arrival <img src={arrow_icon} alt="" />
          </button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/daily">
          <button className="btn">
            Daily Reports <img src={arrow_icon} alt="" />
          </button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/accidents">
          <button className="btn">
            Accident Reports <img src={arrow_icon} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reports;
