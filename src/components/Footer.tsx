import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Box py={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Legal Advisor
              </Typography>
              <Typography variant="body2">
                1200'den fazla uzman avukat kadromuzla ihtiyacınız olan her konuda anında online danışmanlık hizmeti sağlıyoruz!
              </Typography>
              <Box mt={2}>
                <img src="https://via.placeholder.com/150x50" alt="App Store" />
                <img src="https://via.placeholder.com/150x50" alt="Google Play" style={{ marginLeft: '1rem' }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Popüler Konular
              </Typography>
              <ul className="footer-links">
                <li><Link href="#">Kira Sözleşmeleri</Link></li>
                <li><Link href="#">Boşanma Davaları</Link></li>
                <li><Link href="#">Miras Hukuku</Link></li>
                <li><Link href="#">Ceza Hukuku</Link></li>
                <li><Link href="#">İş Hukuku</Link></li>
                <li><Link href="#">Ticaret Hukuku</Link></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Şartlar ve Gizlilik
              </Typography>
              <ul className="footer-links">
                <li><Link href="#">Gizlilik Politikası</Link></li>
                <li><Link href="#">Kullanıcı Sözleşmesi</Link></li>
                <li><Link href="#">Çerez Politikası</Link></li>
                <li><Link href="#">Aydınlatma Metni</Link></li>
                <li><Link href="#">Bilgi ve Kalite Yönetimi</Link></li>
                <li><Link href="#">Ticari İletişim İzni</Link></li>
              </ul>
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="center" py={3} borderTop="1px solid #ccc">
          <Typography variant="body2" color="textSecondary">
            &copy; 2024 Legal Advisor. All rights reserved.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Eğer kriz anında olduğunuzu ya da başka bir kişinin tehlikede olduğunu düşünüyorsanız, bu siteyi kullanmayınız. Hemen doğru yardımı almak için <Link href="#">bu kaynaklara</Link> başvurunuz.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
