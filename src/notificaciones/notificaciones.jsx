import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Typography, Paper, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [editId, setEditId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Cargar las notificaciones desde la API cuando el componente se monte
  useEffect(() => {
    fetchNotificaciones();
  }, []);

  // Obtener las notificaciones desde la API
  const fetchNotificaciones = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/notificaciones');
      const data = Array.isArray(response.data.data) ? response.data.data : [];
      setNotificaciones(data);
    } catch (error) {
      console.error("Error al obtener las notificaciones:", error);
    }
  };

  // Función para agregar o editar notificación
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = { titulo, mensaje, id: editId };

    try {
      if (editId) {
        // Editar notificación
        const updatedNotificaciones = notificaciones.map((notificacion) =>
          notificacion.id === editId ? { ...notificacion, ...datos } : notificacion
        );
        setNotificaciones(updatedNotificaciones);

        // Actualizar en la base de datos
        await axios.put(`http://localhost:3001/api/notificaciones?id=${editId}`, { titulo, mensaje });
        console.log(`Notificación con ID ${editId} actualizada.`);
      } else {
        // Agregar nueva notificación
        const newNotificacion = { ...datos };
        setNotificaciones([...notificaciones, newNotificacion]);

        // Agregar en la base de datos
        await axios.post('http://localhost:3001/api/notificaciones', newNotificacion);
        console.log(`Notificación con ID ${datos.id} agregada.`);
      }

      setTitulo('');
      setMensaje('');
      setEditId(null);
      setOpenDialog(false);
    } catch (error) {
      console.error("Error al guardar la notificación:", error);
    }
  };

  // Función para eliminar notificación
  const handleDelete = async (id) => {
    try {
      // Eliminar de la base de datos
      await axios.delete(`http://localhost:3001/api/notificaciones?id=${id}`);

      // Eliminar de la UI
      const updatedNotificaciones = notificaciones.filter(notificacion => notificacion.id !== id);
      setNotificaciones(updatedNotificaciones);

      console.log(`Notificación con ID ${id} eliminada.`);
    } catch (error) {
      console.error("Error al eliminar la notificación:", error);
    }
  };

  // Función para abrir el formulario de edición
  const handleEdit = (notificacion) => {
    setTitulo(notificacion.titulo);
    setMensaje(notificacion.mensaje);
    setEditId(notificacion.id);
    setOpenDialog(true);
  };

  // Función para abrir el diálogo de agregar nueva notificación
  const handleAdd = () => {
    setTitulo('');
    setMensaje('');
    setEditId(null);
    setOpenDialog(true);
  };
    return (
      <Box sx={{ padding: 3 }}>
        {/* Título principal */}
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{color:"#c20000"}}>
          Gestión de Notificaciones
        </Typography>
  
        {/* Botón para agregar notificación */}
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Agregar Notificación
          </Button>
        </Box>
  
        {/* Lista de notificaciones */}
        <Paper sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
          <List>
            {notificaciones.map((notificacion) => (
              <ListItem key={notificacion.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                <ListItemText
                  primary={notificacion.titulo}
                  secondary={notificacion.mensaje}
                  sx={{ flex: 1 }}
                />
                <IconButton onClick={() => handleEdit(notificacion)} sx={{ color: 'primary.main' }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(notificacion.id)} sx={{ color: 'error.main' }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Paper>
  
        {/* Diálogo de edición o creación */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>{editId ? 'Editar Notificación' : 'Nueva Notificación'}</DialogTitle>
          <DialogContent>
            <TextField
              label="Título"
              fullWidth
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Mensaje"
              fullWidth
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleSubmit} color="primary">
              {editId ? 'Actualizar' : 'Agregar'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  };
  
  export default Notificaciones;
