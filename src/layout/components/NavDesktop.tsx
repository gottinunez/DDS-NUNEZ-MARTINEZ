// NavDesktop.jsx (Navegación para pantallas grandes)
import React from 'react';
import { Button, Stack } from '@mui/material';
import { MonetizationOn, Web } from '@mui/icons-material';

const NavDesktop = () => (
  <Stack direction="row" spacing={2}>
    <Button startIcon={<Web />} href='/' sx={{color:"#ffff"}}>
      Home
    </Button>
  </Stack>
);

export default NavDesktop;
