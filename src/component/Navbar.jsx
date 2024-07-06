import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, useTheme, Button, ButtonGroup, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const MyButton = styled(Button)({
  color: '#ffffff',
  marginRight: 1,
  borderRadius: "50%",
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  console.log(isMobile);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ 
        width: '50%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2
       }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

      <List>
        {['Home', 'About', 'Services', 'Contact'].map((text) => (
          <ListItem component={Link} to={text.toLowerCase() === 'home' ? '/' : `/${text.toLowerCase()}`} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <ButtonGroup variant='' color="info" size="small" sx={{ flexDirection: 'column' }}>
        <MyButton><InstagramIcon /></MyButton>
        <MyButton><FacebookIcon /></MyButton>
        <MyButton><XIcon /></MyButton>
        <MyButton><LinkedInIcon /></MyButton>

        <Button>Apply Now</Button>
      </ButtonGroup>
    </Box >
  );

  return (
    <>
      <AppBar position="sticky"
        sx={{
          backgroundColor: 'rgba(9, 18, 66, 0.25)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}>
        <Toolbar>
          <Box
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'space-between', flexDirection: { md: 'column', lg: 'row' } }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {['Home', 'About', 'Services', 'Contact'].map((text) => (
                <Link
                  to={text.toLowerCase() === 'home' ? '/' : `/${text.toLowerCase()}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  key={text}
                >
                  <Button color='inherit'>
                    {text}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { md: 'column', lg: 'row' }, gap: 2 }}>
              <ButtonGroup variant='' color='inherit'>
                <Button><InstagramIcon /></Button>
                <Button><FacebookIcon /></Button>
                <Button><XIcon /></Button>
                <Button><LinkedInIcon /></Button>
              </ButtonGroup>
              <Button variant='contained' color='warning'>Apply Now</Button>
            </Box>
          </Box>

          <Box sx={{ display: { sm: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>


        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
