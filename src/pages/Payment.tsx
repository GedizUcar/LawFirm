import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import './Payment.css';

const Payment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lawyer, date } = location.state || {};

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleConfirmPayment = () => {
    // Implement payment confirmation logic here
    alert('Payment successful!');
    navigate('/');
  };

  if (!lawyer || !date) {
    return <div>No appointment details found.</div>;
  }

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2>Payment Information</h2>
      </div>
      <Card>
        <CardContent>
          <Typography variant="h6">Appointment Details</Typography>
          <Typography variant="body1">Lawyer: {lawyer.name}</Typography>
          <Typography variant="body1">Specialization: {lawyer.specialization}</Typography>
          <Typography variant="body1">City: {lawyer.city}</Typography>
          <Typography variant="body1">Date: {date.toLocaleString()}</Typography>
        </CardContent>
      </Card>
      <form className="payment-form">
        <TextField label="Cardholder Name" variant="outlined" required />
        <TextField label="Card Number" variant="outlined" required />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <TextField label="Expiry Date" variant="outlined" required style={{ flex: 1 }} />
          <TextField label="CVV" variant="outlined" required style={{ flex: 1 }} />
        </div>
      </form>
      <div className="payment-actions">
        <Button variant="contained" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleConfirmPayment}>
          Confirm Payment
        </Button>
      </div>
    </div>
  );
};

export default Payment;
