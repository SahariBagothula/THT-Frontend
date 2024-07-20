import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './SentEmails.css';

const SentEmails = () => {
  const [sentEmails, setSentEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSentEmails = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:8080/api/emails/sent');
      
      if (response.status === 200) {
        setSentEmails(response.data);
      } else {
        throw new Error('Failed to fetch sent emails');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSentEmails();
  }, []);

  return (
    <div className="sent-emails-container">
      <h2>Sent Emails</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <ul>
            {sentEmails.map((email, index) => (
              <li key={index}>
                <strong>To:</strong> {email.to} <br />
                <strong>Subject:</strong> {email.subject} <br />
                <strong>Body:</strong> {email.body} <br />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SentEmails;
