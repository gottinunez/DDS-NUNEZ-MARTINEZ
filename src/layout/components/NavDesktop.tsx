// NavDesktop.jsx (Navegación para pantallas grandes)
import React from 'react';
import { Button, Stack } from '@mui/material';
import { Web } from '@mui/icons-material';
import CalculateIcon from '@mui/icons-material/Calculate';
import FingerprintIcon from "@mui/icons-material/Fingerprint";

const NavDesktop = () => (
  <Stack direction="row" spacing={2}>
    <Button startIcon={< FingerprintIcon />} href='/sobrenosotros' sx={{
      backgroundColor: "#c20000", // Fondo predeterminado
      color: "white", // Texto predeterminado
      "&:hover": {
        backgroundColor: "#ffffff", // Fondo al pasar el mouse
        color: "#c20000", // Texto al pasar el mouse
      },
    }}>
      Sobre Nosotros
    </Button>
    <Button startIcon={<CalculateIcon />} href='/calculadora' sx={{
      backgroundColor: "#c20000", // Fondo predeterminado
      color: "white", // Texto predeterminado
      "&:hover": {
        backgroundColor: "#ffffff", // Fondo al pasar el mouse
        color: "#c20000", // Texto al pasar el mouse
      },
    }}>
      Calculadora
    </Button>
    <Button startIcon={<Web />} href='/' sx={{
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
