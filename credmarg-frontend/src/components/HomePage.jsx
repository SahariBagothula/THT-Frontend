import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  return (
     <div className="home-container">
      <div className="home-content">
      <div className="heading-card1">Credmarg</div>
        <div className="side-card">
        <div className="heading-card2">Why Choose us? </div>
        <div className="heading-card3">
            <p>At Credmarg we are supercharging the effectiveness of the SMEs by building software to simplify the employee and vendor payment flows.</p>
            <p>Our software is designed to help you manage your employees and vendors efficiently.</p>
        </div>
        </div>
        <div className="heading-card4">Click on the cards below to get started.</div>
      <div className="nav-container">
        <div className="nav-item">
            <p className="heading-card5">Create your employees from here.</p>
          <button className="button-card">
          <Link to="/add-employee" style={{"textDecoration": "none"}}>
            <p className="heading-card6">Add Employee</p>
          </Link>
          </button>
        </div>
        <div className="nav-item">
        <p className="heading-card5">Create your vendors from here.</p>
        <button className="button-card">
          <Link to="/add-vendor" style={{"textDecoration": "none"}}>
            <p>Add Vendor</p>
          </Link>
        </button>
        </div>
        <div className="nav-item">
        <p className="heading-card5">Send emails to your vendors from here.</p>
        <button className="button-card">
          <Link to="/send-email" style={{"textDecoration": "none"}}>
            <p>Send Email</p>
          </Link>
        </button>
        </div>
        <div className="nav-item">
        <p className="heading-card5">Check sent emails from here.</p>
        <button className="button-card">
          <Link to="/sent-emails" style={{"textDecoration": "none"}}>
            <p>Sent Emails</p>
          </Link>
        </button>
        </div>
        <div className="nav-item">
        <p className="heading-card5">Find all your employees from here.</p>
        <button className="button-card">
          <Link to="/view-employees" style={{"textDecoration": "none"}}>
            <p>View Employees</p>
          </Link>
        </button>
        </div>
        <div className="nav-item">
        <p className="heading-card5">Find all your employees from here.</p>
        <button className="button-card">
          <Link to="/view-vendors" style={{"textDecoration": "none"}}>
            <p>View Vendors</p>
          </Link>
        </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HomePage;
