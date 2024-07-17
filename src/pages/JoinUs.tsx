import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const JoinUs: React.FC = () => {
  return (
    <Container className="container">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Join Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Join us page content goes here.
        </Typography>
      </Box>
    </Container>
  );
};

export default JoinUs;
