import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton, TextField, Button, Toolbar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#003366',
        color: 'white',
        py: 4,
        mt: 5,
      }}
    >
      <Toolbar>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box mb={2}>
              <Typography variant="h6" gutterBottom>
                CHARTWELL LOGISTICS
              </Typography>
              <Typography variant="body2" paragraph>
                Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon />
              <Typography variant="body2" ml={1}>
                contact@logistics.com
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <PhoneIcon />
              <Typography variant="body2" ml={1}>
                (00) 112 365 489
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" ml={2.5} gutterBottom>
              Pages
            </Typography>
            <Box>
              <Link href="/about" color="inherit" underline="none" display="block" mb={1}>
                <Button color='inherit'>
                About Us
                </Button>
              </Link>
              <Link href="/team" color="inherit" underline="none" display="block" mb={1}>
                <Button color='inherit'>
                Our Team
                </Button>
              </Link>
              <Link href="/jobs" color="inherit" underline="none" display="block" mb={1}>
                <Button color='inherit'>
                Jobs
                </Button>
              </Link>
              <Link href="/contact" color="inherit" underline="none" display="block" mb={1}>
                <Button color='inherit'>
                Contact
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Subscribe
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <TextField
                label="Email here"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                  mr: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                  },
                }}
              />
              <Button variant="contained" color="warning">
                Send Now
              </Button>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <IconButton href="https://www.linkedin.com" target="_blank" color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://www.twitter.com" target="_blank" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
        <Box textAlign="center" mt={5} borderTop="1px solid grey" pt={2}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} AUTO HAUL EXPRESS LLC 
          </Typography>
        </Box>
    </Box>
  );
};

export default Footer;
