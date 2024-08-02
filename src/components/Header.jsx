import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Phone from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMobile);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <>
      <Button color="inherit">
        Home
        <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
      </Button>
      <Button color="inherit">
        What We Do
        <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
      </Button>
      <Button color="inherit">
        How It Works
        <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
        <KeyboardArrowDownIcon />
      </Button>
    </>
  );

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#0c0f25', fontWeight: 600 }}>
      <Container maxWidth="xl">
        <Toolbar>
          {isMobile ? (
            <>
              
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              {menuItems}
            </Box>
          )}

          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: {sm: '', md: 'center'} }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              <img src="/public/assets/logo_re.png" alt="Logo" width="100px" />
            </Typography>
          </Box>

          {/* Right section with menu items and call button */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            {isMobile ? (
              <Box>
               <Button
                  variant="contained"
                  sx={{ backgroundColor: '#e01933', color: '#fff', borderRadius: 2, mr: 3, fontSize: 10 }}
                  startIcon={<Phone />}
                >
                  (888) 249-8840
                </Button>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {['Home', 'What We Do', 'How It Works', 'About', 'Our Gallery', 'Contact'].map((text) => (
                    <ListItem  key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
              </Box>
            ) : (
              <>
                <Button color="inherit">
                  About
                  <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
                </Button>
                <Button color="inherit">
                  Our Gallery
                  <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
                </Button>
                <Button color="inherit">
                  Contact
                  <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#e01933', color: '#fff', marginLeft: 2, borderRadius: 2 }}
                  startIcon={<Phone />}
                >
                  (888) 249-8840
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
