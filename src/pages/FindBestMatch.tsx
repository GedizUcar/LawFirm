import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FindBestMatch: React.FC = () => {
  return (
    <Container className="container">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Find Best Match
        </Typography>
        <Typography variant="body1" gutterBottom>
          Find best match page content goes here.
        </Typography>
      </Box>
    </Container>
  );
};

export default FindBestMatch;
