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
<<<<<<< HEAD
import { Link as RouterLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const list = ['Home', 'What_We_Do', 'How_It_Works',]
const lists = ['Home', 'What_We_Do', 'How_It_Works', 'About', 'Gallery', 'Contact']
=======
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
const list = ['Home', 'What-We-Do', 'How-It-Works', ]
>>>>>>> behruz

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
<<<<<<< HEAD
      {list.map((item) =>
        item.replace(/_/g, ' ') === 'How It Works' ? (
          <Button
            color="inherit"
            key={item}
            aria-controls={Boolean(anchorEl) ? 'basic-menu' : undefined}
            aria-haspopup="true"
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          >
            How It Works
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMenuClose} style={{ borderBottom: '1px solid silver' }}>
                <Link
                  component={RouterLink}
                  to="/how-does-car-shipping-work"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  How does Car Shipping Work
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} style={{ borderBottom: '1px solid silver' }}>
                <Link
                  component={RouterLink}
                  to="/car-shipping-costs"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Car Shipping Costs
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  component={RouterLink}
                  to="/cross-country-car-shipping"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Cross Country Car Shipping
                </Link>
              </MenuItem>
            </Menu>
            <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
            <ArrowDropDownIcon />
          </Button>
        ) : (
          <Link
            to={item.replace(/_/g, ' ').toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
            key={item}
            style={{ color: 'white', textDecoration: 'none' }}
            component={RouterLink}
          >
            <Button color="inherit">
              {item.replace(/_/g, ' ')}
              <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
            </Button>
          </Link>
        )
      )}

=======
    {list.map(item => (
      <Link to={item.replace(/-/g, ' ').toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`} key={item} style={{color: 'white'}}>
        <Button color="inherit">
        {item.replace(/-/g, ' ')}
        <span style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, color: '#e01933' }}>•</span>
        </Button>
      </Link>
    ))}
>>>>>>> behruz
    </>
  );

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#0c0f25', fontWeight: 600 }}>
      <Container maxWidth="xl">
<<<<<<< HEAD
        <Toolbar sx={{ display: { xs: 'flex', lg: '' }, justifyContent: { xs: 'flex-end', lg: '' } }}>
          {isMobile || isTablet ? (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'left' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <img src="/public/assets/logo_re.png" alt="Logo" width="100px" />
              </Typography>
            </Box>
          ) : (<></>)}
          {isMobile || isTablet ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {lists.map(item => (
                    <ListItem to={item.replace(/-/g, ' ').toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`} key={item} style={{ color: 'white' }}>
                      <Button color="primary">
                        {item.replace(/-/g, ' ')}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
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
            </Box>
=======
        <Toolbar>
          {isMobile ? (
            <>
              
            </>
>>>>>>> behruz
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              {menuItems}
            </Box>
          )}

          {/* Logo */}
<<<<<<< HEAD
          {!isMobile && !isTablet ? (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <img src="/public/assets/logo_re.png" alt="Logo" width="100px" />
              </Typography>
            </Box>
          ) : (
            <></>
          )}

          {/* Right section with menu items and call button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
            {!isMobile && !isTablet ? (
=======
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
>>>>>>> behruz
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
