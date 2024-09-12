import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Students.css";
const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/students")
      .then((response) => setStudents(response.data));
  }, []);

  return (
    <div className="students container">
      <div className="students-text">
        <h2>Children list</h2>
        <br></br>

        <table border={5}>
          <tr>
            <td>Child Id</td>
            <td>Child Name</td>
            <td>Arrival Time</td>
          </tr>
          {students.map((student) => (
            <tr>
              <td>{student.child_id}</td>
              <td>{student.name}</td>
              <td>{student.arrival}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Students;
