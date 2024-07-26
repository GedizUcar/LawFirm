import React from 'react';
import { useParams } from 'react-router-dom';
import { lawFirms } from '../data/lawFirms';
import { Card, CardContent, Typography } from '@mui/material';

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  city: string;
}

interface LawFirm {
  id: number;
  name: string;
  location: string;
  description: string;
  practiceAreas: string[];
  lawyers: Lawyer[];
}

const LawyerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lawyerId = parseInt(id ?? '', 10);

  const firm: LawFirm | undefined = lawFirms.find(firm =>
    firm.lawyers.some(lawyer => lawyer.id === lawyerId)
  );
  const lawyer: Lawyer | undefined = firm?.lawyers.find(lawyer => lawyer.id === lawyerId);

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
            {lawyer.specialization} - {lawyer.city}
          </Typography>
          <Typography variant="body2">
            Practice Areas: {firm?.practiceAreas.join(', ')}
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '1rem' }}>
            {firm?.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LawyerDetail;
