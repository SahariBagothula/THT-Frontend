import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ViewVendors.css';

const ViewVendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/vendor/getAll')
      .then(response => setVendors(response.data))
      .catch(error => console.error('There was an error fetching vendors!', error));
  }, []);

  return (
    <div className="list-container">
      <h2>Vendors</h2>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.id}>
            {vendor.name} - {vendor.email} - {vendor.upi}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewVendors;
