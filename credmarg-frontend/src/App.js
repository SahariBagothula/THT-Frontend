import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import EmployeeForm from './components/EmployeeForm';
import VendorForm from './components/VendorForm';
import EmailForm from './components/EmailForm';
import SentEmails from './components/SentEmails';
import ViewEmployees from './components/ViewEmployees';
import ViewVendors from './components/ViewVendors';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/add-employee" element={<EmployeeForm />} />
          <Route path="/add-vendor" element={<VendorForm />} />
          <Route path="/send-email" element={<EmailForm />} />
          <Route path="/sent-emails" element={<SentEmails />} />
          <Route path="/view-employees" element={<ViewEmployees />} />
          <Route path="/view-vendors" element={<ViewVendors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
