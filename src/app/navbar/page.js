"use client"
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import dynamic from 'next/dynamic';

  
const pages = ['For Customer', 'For Business', 'Company', 'Career'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
      <>
        <AppBar position="static" style={{background:'white', color:'black', boxShadow:'none'}}>
          <Container>
            <Toolbar disableGutters>
              <Typography  variant="h6" noWrap component="a" href="/"
                sx={{ display: { xs: 'block', sm: 'none' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#0EACB2',
                  textDecoration: 'none',
                }}>LOGO</Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:{xs:'end'} }}>
                <IconButton 
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color='black'><MenuIcon />
                </IconButton>
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
                      <Typography fontStyle={{textTransform:'none'}} textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button style={{color:'black', fontSize:'18px', boxShadow:'none',textTransform:'none'}}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Link style={{marginRight:'2rem',color:'#0EACB2'}} href='#'>Login</Link>
                <Button style={{width:'140px', height:'50px', fontSize:'18px', backgroundColor:'#0EACB2', color:'white', textTransform:'none'}}>Register</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </>
  );
}
export default dynamic (()=> Promise.resolve(ResponsiveAppBar),{ssr:false})