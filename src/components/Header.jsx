import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Services', 'About', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{backgroundColor: '#fff', color: 'black'}}>
  <Container maxWidth='xl'>
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant='h6'>
          <img src="/assets/logo_re.png" alt="logo" width={80} height={50} />
        </Typography>
        <Typography variant='body1' mt={-1}>
         Auto haul express LLC
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, display: { sm: 'flex', md: 'none' } }}>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>

      </Box>
      <Box sx={{ flexGrow: 1, display: { sm: 'none', md: 'flex' }, justifyContent: { lg: 'center', md: 'flex-end' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1, display: { sm: 'none', md: 'none', lg: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
        <Button variant='contained' color='info' size='small'>
          Get a Quote
        </Button>
      </Box>
      <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  </Container>
    </AppBar >
  );
}
export default Header;