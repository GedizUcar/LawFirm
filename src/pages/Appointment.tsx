import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import lawFirms from '../data/lawFirms'; // düzeltildi

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  education: string;
  details: string;
  available: string[]; // Uygunluk zamanlarını burada belirtiyoruz
}

const Appointment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lawyer = id 
    ? lawFirms.flatMap(firm => firm.lawyers).find((lawyer: Lawyer) => lawyer.id === parseInt(id ?? '', 10))
    : null;

  const [selectedTime, setSelectedTime] = useState('');

  if (!id || !lawyer) {
    return <div>Lawyer not found</div>;
  }

  return (
    <div className="container">
      <h2>Schedule Appointment with {lawyer.name}</h2>
      <form>
        <TextField
          label="Select Time"
          select
          SelectProps={{
            native: true,
          }}
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        >
          <option value="">Select a time</option>
          {lawyer.available.map((time, index) => (
            <option key={index} value={time}>
              {new Date(time).toLocaleString()}
            </option>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Schedule Appointment
        </Button>
      </form>
    </div>
  );
};

export default Appointment;
