// NavMobile.jsx (Navegación para pantallas pequeñas)
import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { Menu } from '@mui/icons-material';

const NavMobile = () => (
  <Stack direction="row" spacing={1}>
    <IconButton color="inherit">
      <Menu />
    </IconButton>
    {/* Puedes agregar más botones de navegación aquí */}
  </Stack>
);

export default NavMobile;
