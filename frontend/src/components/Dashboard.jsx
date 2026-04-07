
import React from "react";
import "../App.css";

export default function Dashboard({ students }) {
  return (
    <div className="dashboard">
      <h1>Placement Dashboard</h1>

      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s,i)=>(
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.total}</td>
                <td>{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
