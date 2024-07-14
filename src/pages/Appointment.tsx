import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { lawFirms } from '../data/lawFirms';

const Appointment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedTime, setSelectedTime] = useState('');

  const lawyer = id 
    ? lawFirms.flatMap(firm => firm.lawyers).find(lawyer => lawyer.id === parseInt(id))
    : null;

  if (!id || !lawyer) {
    return <Typography variant="h4">Lawyer not found</Typography>;
  }

  const handleSubmit = () => {
    alert(`Appointment scheduled with ${lawyer.name} at ${selectedTime}`);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Schedule Appointment with {lawyer.name}
        </Typography>
        <TextField
          select
          label="Select Time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          SelectProps={{
            native: true,
          }}
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
          onClick={handleSubmit}
          disabled={!selectedTime}
        >
          Schedule Appointment
        </Button>
      </Box>
    </Container>
  );
};

export default Appointment;
