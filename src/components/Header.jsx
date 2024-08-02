import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container } from '@mui/material';
import Phone from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const pages = ['home', 'what-we-do', ]

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#0c0f25', fontWeight: 600 }}>
      <Container maxWidth='xl'>
        <Toolbar>
          {/* Left section with menu items */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Button color="inherit">Home<span style={{display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933'}}>•</span></Button>
            <Button color="inherit">What We Do <span style={{display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933'}}>•</span></Button>
            <Button color="inherit">How It Works <span style={{display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933'}}>•</span> <KeyboardArrowDownIcon/></Button>
          </Box>

          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              <img src="/public/assets/logo_re.png" alt="Logo" width={"100px"} />
            </Typography>
          </Box>

          {/* Right section with menu items and call button */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button color="inherit">About <span style={{display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933'}}>•</span></Button>
            <Button color="inherit">Our Gallery <span style={{display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933'}}>•</span></Button>
            <Button color="inherit">Contact <span style={{display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933'}}>•</span></Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#e01933', color: '#fff', marginLeft: 2, borderRadius: 2 }}
              startIcon={<Phone />}
            >
              (888) 249-8840
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
