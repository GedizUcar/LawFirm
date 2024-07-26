import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { lawFirms } from '../data/lawFirms';

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
              <Card key={lawyer.id}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {lawyer.name}
                  </Typography>
                  <Typography color="textSecondary">
                    {lawyer.specialization} - {lawyer.city}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LawFirmDetail;
