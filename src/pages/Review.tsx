import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Review: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Review
        </Typography>
        <Typography variant="body1" gutterBottom>
          Leave a review for a lawyer or law firm.
        </Typography>
      </Box>
    </Container>
  );
};

export default Review;
