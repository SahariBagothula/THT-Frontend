import React, { useState } from 'react';
import axios from 'axios';

import './VendorForm.css';

const VendorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [upi, setUpi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/vendor/save', { name, email, upi })
      .then(response => {
        alert('Vendor added successfully');
        setName('');
        setEmail('');
        setUpi('');
      })
      .catch(error => {
        console.error('There was an error adding the vendor!', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Add Vendor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          UPI:
          <input type="text" value={upi} onChange={(e) => setUpi(e.target.value)} required />
        </label>
        <button type="submit">Add Vendor</button>
      </form>
    </div>
  );
};

export default VendorForm;
