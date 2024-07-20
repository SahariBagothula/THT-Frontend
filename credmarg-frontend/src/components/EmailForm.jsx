import React, { useState } from 'react';
import axios from 'axios';

import './EmailForm.css';

const EmailForm = () => {
  const [vendorEmails, setVendorEmails] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendEmails = async () => {
    setLoading(true);
    setError('');
    try {
      const emailList = vendorEmails.split(',').map(email => email.trim());
      const response = await axios.post('http://localhost:8080/api/emails/send', null, {
        params: {
          vendorEmails: emailList.join(','), // Join the email list into a single string separated by commas
        },
      });
  
      if (response.status === 200) {
        alert('Emails sent successfully!');
        setVendorEmails('');
      } else {
        throw new Error('Failed to send emails');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <h2 className="heading-component">Send Emails to Vendors</h2>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter vendor emails separated by commas"
        value={vendorEmails}
        onChange={(e) => setVendorEmails(e.target.value)}
      />
      <button  className="btn-email" onClick={handleSendEmails} disabled={loading}>
        {loading ? 'Sending...' : 'Send Emails'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default EmailForm;
