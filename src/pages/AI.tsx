import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AI: React.FC = () => {
  return (
    <Container className="container">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          AI
        </Typography>
        <Typography variant="body1" gutterBottom>
          AI page content goes here.
        </Typography>
      </Box>
    </Container>
  );
};

export default AI;
