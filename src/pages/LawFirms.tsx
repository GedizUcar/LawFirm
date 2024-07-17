import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { lawFirms } from '../data/lawFirms';

const LawFirms: React.FC = () => {
  return (
    <Container className="container">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Hukuk Büroları
        </Typography>
        <List>
          {lawFirms.map(firm => (
            <ListItem key={firm.id}>
              <ListItemText
                primary={firm.name}
                secondary={firm.location}
              />
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/law-firm/${firm.id}`}
              >
                Detayları Gör
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default LawFirms;
