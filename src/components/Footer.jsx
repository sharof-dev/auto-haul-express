import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, List, ListItem, styled } from '@mui/material';

const LinkMenu = styled(Link)(({theme}) => ({
  color: theme.palette.common.white,
  paddingLeft: 0,
  textDecoration: 'none',
  '&:hover': {
    color: '#e01933',
  },
}))

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Grid container spacing={5} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            USCarGoFreight
          </Typography>
          <Typography variant="body2" paragraph>
            Disclaimer: All pictures of equipment are meant for general reference and do not imply automatic use of that equipment. US Car-Go Freight operates as a brokerage working with a vetted group of contracted drivers. If you would like to view pictures of the equipment being used for your specific transport, please be sure to request those from your US Car-Go Freight representative.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ borderBottom: '2px solid red' }}>
              Menu
            </Typography>
          </Box>
          <List>
            <ListItem>
              <LinkMenu href="#" color="inherit">Home</LinkMenu>
            </ListItem>
            <ListItem>
              <Link href="#" color="inherit">What We Do</Link>
            </ListItem>
            <ListItem>
              <Link href="#" color="inherit">About</Link>
            </ListItem>
            <ListItem>
              <Link href="#" color="inherit">Blog</Link>
            </ListItem>
            <ListItem>
              <Link href="#" color="inherit">Gallery</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <List>
            <ListItem>
              <Link href="#" color="inherit">Contact</Link>
            </ListItem>
            <ListItem>
              <Link href="#" color="inherit">FAQs</Link>
            </ListItem>
            <ListItem>
              <Link href="#" color="inherit">Terms & Conditions</Link>
            </ListItem>
            <ListItem>
              <Link href="#" color="inherit">Privacy Policy</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Connect
          </Typography>
          <Typography variant="body2" paragraph>
            (888) 249-8840
            <br />
            1001 W Cleveland St
            <br />
            Tampa Florida 33606
            <br />
            info@uscargofreight.com
          </Typography>
        </Grid>
      </Grid>
    </Box >
  );
};

export default Footer;
