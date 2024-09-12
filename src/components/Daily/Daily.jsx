import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Daily.css";

const Daily = () => {
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/daily")
      .then((response) => setDaily(response.data));
  }, []);

  return (
    <div className="daily container">
      <div className="daily-text">
        <h2>Daily Report</h2>
        <br></br>
        <table border={5}>
          <tr>
            <td>Child Id</td>
            <td>Meals Time</td>
            <td>Toilets Time</td>
            <td>Rest Time</td>
          </tr>
          {daily.map((dailyrecord) => (
            <tr>
              <td>{dailyrecord.child_id}</td>
              <td>{dailyrecord.meals}</td>
              <td>{dailyrecord.toilets}</td>
              <td>{dailyrecord.rest}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Daily;
