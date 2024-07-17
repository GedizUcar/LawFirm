import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';
import lawFirms from '../data/lawFirms';

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  education: string;
  details: string;
}

interface LawFirm {
  id: number;
  name: string;
  location: string;
  description: string;
  lawyers: Lawyer[];
}

const LawFirmDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const firm: LawFirm | undefined = lawFirms.find(firm => firm.id === parseInt(id ?? '', 10));

  if (!firm) {
    return <div>Law Firm not found</div>;
  }

  return (
    <div className="container">
      <Card className="law-firm-card">
        <CardContent>
          <Typography variant="h5" component="h2">
            {firm.name}
          </Typography>
          <Typography color="textSecondary">
            {firm.location}
          </Typography>
          <Typography variant="body2" component="p">
            {firm.description}
          </Typography>
          <Typography variant="h6" component="h3" style={{ marginTop: '1rem' }}>
            Lawyers
          </Typography>
          <ul>
            {firm.lawyers.map(lawyer => (
              <li key={lawyer.id}>
                {lawyer.name} - {lawyer.specialization}
              </li>
            ))}
          </ul>
          <Button variant="contained" color="primary" href={`/appointment/${firm.id}`}>
            Make an Appointment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LawFirmDetail;
