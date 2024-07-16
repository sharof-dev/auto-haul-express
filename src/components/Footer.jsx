import React from 'react';
import { Box, Grid, Typography, Link, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#111827',
  color: '#FFFFFF',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#FFFFFF',
  textDecoration: 'none',
  marginBottom: theme.spacing(2),
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth='xl'>
        <Box padding={'34px 0'} display={'flex'} justifyContent={"space-between"} alignItems={'center'} sx={{ borderBottom: '1px solid grey' }}>
          <Typography sx={{ fontSize: { sm: '1.5rem', md: '24px', lg: '52px' } }}>
            Ready to Ship Your Vehicle?
          </Typography>
          <Box display={'flex'} gap={2}>
            <Button variant="contained" color="info" href="tel:+19175945566">
              +1 917 594 55 66
            </Button>
            <Button
              variant="contained"
              color="warning"
              href="#"
              sx={{ display: { sm: 'none', md: 'none', lg: 'flex' } }}
            >
              Get a Quote
            </Button>
          </Box>
        </Box>
        <Grid container spacing={4} sx={{ padding: '60px 0' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '12px', color: 'rgb(148, 163, 184)' }}>Home</Typography>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Contact us</FooterLink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '12px', color: 'rgb(148, 163, 184)' }}>Services</Typography>
            <FooterLink href="#">Car Transport</FooterLink>
            <FooterLink href="#">Open Trailer Auto Shipping</FooterLink>
            <FooterLink href="#">Motorcycle Shipping</FooterLink>
            <FooterLink href="#">Enclosed Auto Transport Shipping</FooterLink>
            <FooterLink href="#">Door-to-Door Shipping</FooterLink>
            <FooterLink href="#">Expedited Car Shipping</FooterLink>
            <FooterLink href="#">Heavy equipment shipment</FooterLink>
            <FooterLink href="#">Boat Shipping</FooterLink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '12px', color: 'rgb(148, 163, 184)' }}>Office Location</Typography>
            <Typography>
              1 MAIDEN LANE, 5TH FLOOR NEW YORK
              <br />
              10038 NY United States
              <br />
              Working hours: Mon – Sat: 09am-7pm
              <br />
              Phone: +1 917 594 55 66
              <br />
              Email: sales@autohaulexpress.com
              <br />
              USDOT: 3990000
              <br />
              MC: 1496533
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '12px', color: 'rgb(148, 163, 184)' }}>Press</Typography>
            <FooterLink href="#">Trust Pilot</FooterLink>
            <FooterLink href="#">Verified Movers</FooterLink>
            <FooterLink href="#">My Moving</FooterLink>
            <FooterLink href="#">Transport Review</FooterLink>
            <FooterLink href="#">BBB</FooterLink>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: '60px 0',
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid grey',
          }}
        >
          <Box>
            <img src="/assets/logo_re.png" alt="logo" width="200px" height={120} />
          </Box>
          <Box>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Term and Conditions</FooterLink>
          </Box>
          <Typography>
            &copy; 2016-2024 – Auto Haul Express Inc. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
