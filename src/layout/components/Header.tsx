import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Button } from '@mui/material';
import { Web } from '@mui/icons-material';
import NavDesktop from './NavDesktop'; 
import NavMobile from './NavMobile';

const Header = () => (
  <AppBar position="sticky" sx={{ backgroundColor: '#c20000', boxShadow: 3 }}>
  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
      <Link underline="none" color="inherit">
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'white', marginLeft:"40%" }}>
          NUTINEZ
        </Typography>
      </Link>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    </Box>
    
      <NavDesktop />
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <NavMobile />
      </Box>
      </Toolbar>
      </AppBar>
);

export default Header;
