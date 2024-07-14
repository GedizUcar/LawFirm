import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { lawFirms } from '../data/lawFirms';

const LawFirmDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const lawFirm = id 
    ? lawFirms.find(firm => firm.id === parseInt(id))
    : null;

  if (!id || !lawFirm) {
    return <Typography variant="h4">Law Firm not found</Typography>;
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          {lawFirm.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Location: {lawFirm.location}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Lawyers:
        </Typography>
        <List>
          {lawFirm.lawyers.map(lawyer => (
            <ListItem key={lawyer.id}>
              <ListItemText
                primary={`${lawyer.name} - ${lawyer.specialty}`}
                secondary={`Available: ${lawyer.available.join(', ')}`}
              />
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/appointment/${lawyer.id}`}
              >
                Schedule Appointment
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default LawFirmDetail;
