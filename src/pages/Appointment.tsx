import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { lawFirms } from '../data/lawFirms';

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  city: string;
  available: string[];
}

const Appointment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedTime, setSelectedTime] = useState('');
  
  const lawyer = id 
    ? lawFirms.flatMap(firm => firm.lawyers).find((lawyer: Lawyer) => lawyer.id === parseInt(id ?? '', 10))
    : null;

  if (!id || !lawyer) {
    return <div>Lawyer not found</div>;
  }

  return (
    <div className="container">
      <h2>Schedule Appointment with {lawyer.name}</h2>
      <div>
        <TextField
          label="Select Time"
          select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          fullWidth
        >
          <option value="">Select a time</option>
          {lawyer.available.map((time, index) => (
            <option key={index} value={time}>
              {new Date(time).toLocaleString()}
            </option>
          ))}
        </TextField>
        <Button variant="contained" color="primary" onClick={() => alert(`Scheduled with ${lawyer.name} at ${new Date(selectedTime).toLocaleString()}`)}>
          Schedule
        </Button>
      </div>
    </div>
  );
}

export default Appointment;
