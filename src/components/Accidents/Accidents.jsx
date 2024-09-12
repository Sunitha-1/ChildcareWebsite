import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Accidents.css";

const Accidents = () => {
  const [accidents, setAccidents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/accidents")
      .then((response) => setAccidents(response.data));
  }, []);

  return (
    <div className="accidents container">
      <div className="accidents-text">
        <h2>Accident list</h2>
        <br></br>
        <table border={5}>
          <tr>
            <td>Child Id</td>
            <td>Accident Time</td>
            <td>Where Hurt</td>
            <td>What Happend</td>
            <td>First Aid Given</td>
          </tr>
          {accidents.map((accident) => (
            <tr>
              <td>{accident.child_id}</td>
              <td>{accident.whattime}</td>
              <td>{accident.wherehurt}</td>
              <td>{accident.whathappened}</td>
              <td>{accident.firstaid}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Accidents;
