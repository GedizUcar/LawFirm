import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { lawFirms } from '../data/lawFirms';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  city: string;
  available: string[];
}

interface LawFirm {
  id: number;
  name: string;
  location: string;
  description: string;
  practiceAreas: string[];
  lawyers: Lawyer[];
}

const LawFirmDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const firm: LawFirm | undefined = lawFirms.find(firm => firm.id === parseInt(id ?? '', 10));
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  const handleOpen = (lawyer: Lawyer) => {
    setSelectedLawyer(lawyer);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDate(null);
  };

  const handleConfirmAppointment = () => {
    if (selectedDate && selectedLawyer) {
      navigate('/payment', { state: { lawyer: selectedLawyer, date: selectedDate } });
    }
  };

  if (!firm) {
    return <div>Law Firm not found</div>;
  }

  return (
    <div className="container">
      <Card className="law-firm-detail-card">
        <CardContent>
          <Typography variant="h5" component="div">
            {firm.name}
          </Typography>
          <Typography color="textSecondary">
            {firm.location}
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '1rem' }}>
            {firm.description}
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '1rem' }}>
            Practice Areas: {firm.practiceAreas.join(', ')}
          </Typography>
          <div>
            <h3>Lawyers</h3>
            {firm.lawyers.map(lawyer => (
              <Card key={lawyer.id} className="lawyer-card">
                <CardContent>
                  <Typography variant="h6" component="div">
                    {lawyer.name}
                  </Typography>
                  <Typography color="textSecondary">
                    {lawyer.specialization} - {lawyer.city}
                  </Typography>
                  <Button variant="contained" color="primary" onClick={() => handleOpen(lawyer)}>
                    Get an Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Appointment Time</DialogTitle>
        <DialogContent className="dialog-content">
          <Typography variant="h6">{selectedLawyer?.name}</Typography>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            showTimeSelect
            dateFormat="Pp"
            inline
          />
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAppointment} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LawFirmDetail;
