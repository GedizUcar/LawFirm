import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Grid, Paper, Typography, Box, IconButton, InputAdornment } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="md" className="login-container">
      <Paper elevation={6} className="login-paper">
        <Grid container>
          <Grid item xs={12} md={6} className="login-form">
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src="/logo.png" alt="Legal Advisor" className="login-logo" />
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <form noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box display="flex" justifyContent="flex-end">
                  <Link to="#" className="forgot-password">
                    Forgot password?
                  </Link>
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit-button"
                >
                  Sign In
                </Button>
                <Box display="flex" alignItems="center" mt={2} mb={2}>
                  <hr className="divider" />
                  <Typography variant="body2" className="divider-text">or</Typography>
                  <hr className="divider" />
                </Box>
                <Box display="flex" justifyContent="center" mb={2}>
                  <IconButton className="social-login google">
                    <GoogleIcon />
                  </IconButton>
                  <IconButton className="social-login facebook">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton className="social-login apple">
                    <AppleIcon />
                  </IconButton>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Link to="#" className="sign-up-link">
                    Don’t have an account? Sign Up
                  </Link>
                </Box>
              </form>
            </Box>
          </Grid>
          <Grid item xs={false} md={6} className="login-image-container">
            <Box className="login-image-box">
              <Typography variant="h4" className="login-image-text">
                Start Feeling Better Today
              </Typography>
              <Box className="login-image-qr">
                <img src="/qr-code.png" alt="QR Code" className="qr-code" />
                <Typography variant="body2">Have you tried our mobile application?</Typography>
                <Box className="app-store-icons">
                  <img src="/app-store.png" alt="App Store" className="app-store" />
                  <img src="/google-play.png" alt="Google Play" className="google-play" />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
