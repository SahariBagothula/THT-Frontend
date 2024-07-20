import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ViewEmployees.css';

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/employee/getAll')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('There was an error fetching employees!', error));
  }, []);

  return (
    <div className="list-container">
      <h2>Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.designation} - {employee.ctc} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewEmployees;
