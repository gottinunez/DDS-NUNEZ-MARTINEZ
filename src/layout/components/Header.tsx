import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Header = () => (
  <AppBar position="sticky" sx={{ backgroundColor: '#c20000', boxShadow: 3 }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Logo y nombre de la marca centrado */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <Link underline="none" color="inherit">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: 'white',
            }}
          >
            NUTINEZ
          </Typography>
        </Link>
      </Box>

      {/* Contenedor de la navegación (NavDesktop y NavMobile) */}
      {/* NavDesktop solo visible en pantallas grandes */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
        <NavDesktop />
      </Box>
      {/* Mostrar NavMobile solo en pantallas pequeñas */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <NavMobile />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
