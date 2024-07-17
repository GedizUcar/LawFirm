import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HowItWorks: React.FC = () => {
  return (
    <Container className="container">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="body1" gutterBottom>
          How it works page content goes here.
        </Typography>
      </Box>
    </Container>
  );
};

export default HowItWorks;
