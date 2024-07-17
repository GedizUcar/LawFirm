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

const LawyerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lawyer = lawFirms.flatMap(firm => firm.lawyers).find(lawyer => lawyer.id === parseInt(id ?? '', 10));

  if (!lawyer) {
    return <div>Lawyer not found</div>;
  }

  return (
    <div className="container">
      <Card className="lawyer-card">
        <CardContent>
          <Typography variant="h5" component="div">
            {lawyer.name}
          </Typography>
          <Typography color="textSecondary">
            {lawyer.education}
          </Typography>
          <Typography variant="body2">
            Specialization: {lawyer.specialization}
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '1rem' }}>
            {lawyer.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LawyerDetail;
