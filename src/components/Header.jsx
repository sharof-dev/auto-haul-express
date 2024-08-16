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
  Link,
  Menu,
  MenuItem,
} from '@mui/material';
import Phone from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link as RouterLink } from 'react-router-dom';

const lists = ['Home', 'What_We_Do', 'How_It_Works', 'About', 'Gallery', 'Contact'];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = (
    <>
      {lists.slice(0, 3).map((item) =>
        item.replace(/_/g, ' ') === 'How It Works' ? (
          <Button
            color="inherit"
            key={item}
            aria-controls={anchorEl ? 'basic-menu' : undefined}
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
            </Button>
          </Link>
        )
      )}
    </>
  );

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#0c0f25', fontWeight: 600 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {(isMobile || isTablet) ? (
            <>
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
                  {lists.map(item => (
                    <ListItem
                      button
                      component={RouterLink}
                      to={item.replace(/_/g, ' ').toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                      key={item}
                    >
                      <ListItemText primary={item.replace(/_/g, ' ')} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {menuItems}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  <img src="/public/assets/logo_re.png" alt="Logo" width="100px" />
                </Typography>
              </Box>
            </>
          )}
          <Button
            variant="contained"
            sx={{ backgroundColor: '#e01933', color: '#fff', borderRadius: 2, fontSize: 10 }}
            startIcon={<Phone />}
          >
            (888) 249-8840
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
