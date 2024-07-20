import React, { useState } from 'react';
import axios from 'axios';

import './EmployeeForm.css';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [ctc, setCtc] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/employee/save', { name, designation, ctc, email })
      .then(response => {
        alert('Employee added successfully');
        setName('');
        setDesignation('');
        setCtc('');
        setEmail('');
      })
      .catch(error => {
        console.error('There was an error adding the employee!', error);
      });
  };

  return (
    <div className="form-container">
      <h2 className="heading-card">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Designation:
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
        </label>
        <label>
          CTC:
          <input type="text" value={ctc} onChange={(e) => setCtc(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button className="btn-employee" type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
