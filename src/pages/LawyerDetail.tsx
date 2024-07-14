import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { lawFirms } from '../data/lawFirms';

const LawyerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const lawyer = id 
    ? lawFirms.flatMap(firm => firm.lawyers).find(lawyer => lawyer.id === parseInt(id))
    : null;

  if (!id || !lawyer) {
    return <Typography variant="h4">Lawyer not found</Typography>;
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          {lawyer.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Specialty: {lawyer.specialty}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Available Times: {lawyer.available.join(', ')}
        </Typography>
      </Box>
    </Container>
  );
};

export default LawyerDetail;
