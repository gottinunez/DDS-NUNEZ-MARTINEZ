// NavMobile.tsx (Navegación para pantallas pequeñas)
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Box, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavMobile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {/* Barra de navegación */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menú desplegable */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <Button href='/' fullWidth sx={{
            marginBottom: 1,
            backgroundColor: "#c20000", // Fondo predeterminado
            color: "white", // Texto predeterminado
            "&:hover": {
              backgroundColor: "#ffffff", // Fondo al pasar el mouse
              color: "#c20000", // Texto al pasar el mouse
            },
          }}>
            Home
          </Button>
          <Button href='/sobrenosotros' fullWidth sx={{
            marginBottom: 1,
            backgroundColor: "#c20000", // Fondo predeterminado
            color: "white", // Texto predeterminado
            "&:hover": {
              backgroundColor: "#ffffff", // Fondo al pasar el mouse
              color: "#c20000", // Texto al pasar el mouse
            },
          }}>
            Sobre Nosotros
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default NavMobile;
