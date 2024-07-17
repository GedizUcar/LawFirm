import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const JoinUs: React.FC = () => {
  return (
    <div className="join-us-container">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Join Our Legal Network
      </Typography>
      <form className="join-us-form">
        <Typography variant="h6" component="h2" gutterBottom>
          Contact Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone Number"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="website"
              name="website"
              label="Website"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="socialMedia"
              name="socialMedia"
              label="Social Media"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" component="h2" gutterBottom style={{ marginTop: '2rem' }}>
          Education Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="undergraduate"
              name="undergraduate"
              label="Undergraduate Degree"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="undergraduateSchool"
              name="undergraduateSchool"
              label="Undergraduate School"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="graduate"
              name="graduate"
              label="Graduate Degree"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="graduateSchool"
              name="graduateSchool"
              label="Graduate School"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" component="h2" gutterBottom style={{ marginTop: '2rem' }}>
          Application Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="practiceArea"
              name="practiceArea"
              label="Practice Area"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="languages"
              name="languages"
              label="Languages"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload CV
              <input type="file" hidden />
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginTop: '1rem' }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default JoinUs;