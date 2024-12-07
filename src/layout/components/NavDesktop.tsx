// NavDesktop.jsx (Navegación para pantallas grandes)
import React from 'react';
import { Button, Stack } from '@mui/material';
import { MonetizationOn, Web } from '@mui/icons-material';

const NavDesktop = () => (
  <Stack direction="row" spacing={2}>
    <Button startIcon={<Web />} href='/'  sx={{
    backgroundColor: "#c20000", // Fondo predeterminado
    color: "white", // Texto predeterminado
    "&:hover": {
      backgroundColor: "#ffffff", // Fondo al pasar el mouse
      color: "#c20000", // Texto al pasar el mouse
    },
              }}>
      Home
    </Button>
  </Stack>
);

export default NavDesktop;
