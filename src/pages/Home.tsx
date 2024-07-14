import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h2" gutterBottom>
          Welcome to Legal Advisor
        </Typography>
        <Typography variant="h5" gutterBottom>
          Find the best legal advice and lawyers here.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/law-firm/1" style={{ marginTop: '1rem' }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
