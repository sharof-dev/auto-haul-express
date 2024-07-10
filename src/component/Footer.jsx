import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import { Email, Phone, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#00408B',
        color: '#ffffff',
        py: 6,
        px: 2,
      }}
    >
      <Box pl={1.5}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box>
              <img src="/assets/logo_re.png" alt="Logo" width={100} height={80} />
            </Box>
              <Typography variant="h6" gutterBottom>
                AUTO HAUL EXPRESS LLC
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.
            </Typography>
            <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">contact@logistics.com</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">(00) 112 365 489</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom ml={2.5}>
              Pages
            </Typography>
            <Box display="flex" flexDirection="column">
              <Link to={'/'} color="inherit" underline="none" sx={{ mb: 10 }} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color='inherit'>
                  Home
                </Button>
              </Link>
              <Link to={'/about'} color="inherit" underline="none" sx={{ mb: 1 }} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color='inherit'>
                  About
                </Button>
              </Link>
              <Link to={'/services'} color="inherit" underline="none" sx={{ mb: 1 }} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color='inherit'>
                  Services
                </Button>
              </Link>
              <Link to={'/contact'} color="inherit" underline="none" sx={{ mb: 1 }} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color='inherit'>
                  Contact
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom sx={{textAlign: {sm: 'center', md: 'left'}}}>
              Subscribe
            </Typography>
            <TextField
              label="Email here*"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ mb: 2, backgroundColor: '#ffffff', borderRadius: '4px' }}
            />
            <Button variant="contained" color="warning" fullWidth>
              Send Now
            </Button>
            <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }} mt={2}>
              <IconButton color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center" borderTop={'1px solid grey'} pt={2}>
          <Typography variant="body2">
            &copy;Chartwell Logistics Ltd | Designed by Goliath Marketing.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
