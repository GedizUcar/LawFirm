import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container className="container">
      <Box className="hero">
        <Typography variant="h2" gutterBottom>
          Türkiye’nin Gelişmiş Online Hukuk Büroları Ağı ile Tanışın!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Kapsamlı mülakatlarımızı geçmiş, yüksek lisans mezunu 1200+ uzman avukatımız, hukuki destek sağlamak için buradalar.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/law-firms">
          Şimdi Tanışın!
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/lawyers" style={{ marginLeft: '1rem' }}>
          Avukatları İnceleyin
        </Button>
      </Box>
      <Typography variant="h4" gutterBottom>
        Popüler Avukatlar
      </Typography>
      <Box className="lawyer-cards">
        <Box className="lawyer-card">
          <img src="https://via.placeholder.com/150" alt="Lawyer 1" />
          <Typography variant="h6">Arzu Doğan Yıldız</Typography>
          <Typography variant="body2">Uzman Klinik Psikolog</Typography>
          <Button variant="contained" color="primary" component={Link} to="/appointment/1">
            Hemen Randevu Al
          </Button>
        </Box>
        <Box className="lawyer-card">
          <img src="https://via.placeholder.com/150" alt="Lawyer 2" />
          <Typography variant="h6">Aslı Aydın</Typography>
          <Typography variant="body2">Uzman Klinik Psikolog</Typography>
          <Button variant="contained" color="primary" component={Link} to="/appointment/2">
            Hemen Randevu Al
          </Button>
        </Box>
        <Box className="lawyer-card">
          <img src="https://via.placeholder.com/150" alt="Lawyer 3" />
          <Typography variant="h6">Aylin Kaşko</Typography>
          <Typography variant="body2">Uzman Klinik Psikolog</Typography>
          <Button variant="contained" color="primary" component={Link} to="/appointment/3">
            Hemen Randevu Al
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
