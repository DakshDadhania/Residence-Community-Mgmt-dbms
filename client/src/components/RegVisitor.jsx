import React, { useEffect, useState } from "react";

function RegVisitor() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getAllVisitors') // Adjust the URL based on your server setup
      .then(response => response.json())
      .then(data => setVisitors(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Visitors</h2>
      <table>
        <thead>
          <tr>
            <th>Visitor ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Visit Date</th>
            <th>Room No</th>
            <th>Block No</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map(visitor => (
            <tr key={visitor.visitor_id}>
              <td>{visitor.visitor_id}</td>
              <td>{visitor.visitor_name}</td>
              <td>{visitor.phone_number}</td>
              <td>{visitor.visit_date}</td>
              <td>{visitor.room_no}</td>
              <td>{visitor.block_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegVisitor;
