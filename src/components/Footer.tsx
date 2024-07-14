import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#333', padding: '1rem', color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; 2024 Legal Advisor. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
