import React, { useState, useEffect } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [editId, setEditId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Cargar las notificaciones desde localStorage o API cuando el componente se monte
  useEffect(() => {
    // Primero buscamos en el localStorage
    const storedNotificaciones = JSON.parse(localStorage.getItem('notificaciones'));
    if (storedNotificaciones && storedNotificaciones.length > 0) {
      setNotificaciones(storedNotificaciones);  // Si hay notificaciones en el localStorage, las usamos
    } else {
      fetchNotificaciones();  // Si no, las traemos de la API
    }
  }, []);

  // Obtener las notificaciones desde la API
  const fetchNotificaciones = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/notificaciones');
      const data = Array.isArray(response.data) ? response.data : [];
      setNotificaciones(data);
      localStorage.setItem('notificaciones', JSON.stringify(data)); // Guardar en localStorage
    } catch (error) {
      console.error("Error al obtener las notificaciones:", error);
      setNotificaciones([]);  // Establecer un arreglo vacío en caso de error
    }
  };

  // Función para agregar o editar notificación
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = { titulo, mensaje, id: editId || Date.now() };

    try {
      if (editId) {
        // Editar notificación
        const updatedNotificaciones = notificaciones.map((notificacion) =>
          notificacion.id === editId ? { ...notificacion, ...datos } : notificacion
        );
        setNotificaciones(updatedNotificaciones);
        localStorage.setItem('notificaciones', JSON.stringify(updatedNotificaciones));

        // Actualizar en la base de datos
        await axios.put('http://localhost:3000/api/notificaciones', { id: editId, ...datos });
        console.log(`Notificación con ID ${editId} actualizada.`);
      } else {
        // Crear una nueva notificación
        const newNotificaciones = [...notificaciones, datos];
        setNotificaciones(newNotificaciones);
        localStorage.setItem('notificaciones', JSON.stringify(newNotificaciones));

        // Enviar la nueva notificación a la base de datos
        await axios.post('http://localhost:3000/api/notificaciones', datos);
        console.log("Notificación creada.");
      }
      
      // Limpiar el formulario
      setTitulo('');
      setMensaje('');
      setEditId(null);
    } catch (error) {
      console.error("Error al enviar la notificación:", error);
    }
  };

  // Función para editar una notificación
  const openEditDialog = (notificacion) => {
    setTitulo(notificacion.titulo);
    setMensaje(notificacion.mensaje);
    setEditId(notificacion.id);
    setOpenDialog(true);
  };

  // Función para eliminar una notificación
  const handleDelete = async (id) => {
    try {
      // Eliminar de la base de datos
      await axios.delete(`http://localhost:3000/api/notificaciones?id=${id}`);
      console.log(`Notificación con ID ${id} eliminada.`);

      // Eliminar del localStorage y actualizar el estado
      const updatedNotificaciones = notificaciones.filter((notificacion) => notificacion.id !== id);
      setNotificaciones(updatedNotificaciones);
      localStorage.setItem('notificaciones', JSON.stringify(updatedNotificaciones));
    } catch (error) {
      console.error("Error al eliminar la notificación:", error);
    }
  };

  return (
    <div>
      <Typography color={"#000"} variant="h4" gutterBottom>Notificaciones</Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          variant="outlined"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" type="submit">
          {editId ? 'Editar' : 'Agregar'} Notificación
        </Button>
      </form>

      <List>
        {notificaciones.length > 0 ? (
          notificaciones.map((notificacion) => (
            <ListItem key={notificacion.id}>
              <ListItemText
                primary={notificacion.titulo}
                secondary={notificacion.mensaje}
              />
              <IconButton color="primary" onClick={() => openEditDialog(notificacion)}>
                <EditIcon />
              </IconButton>
              <IconButton color="secondary" onClick={() => handleDelete(notificacion.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No hay notificaciones disponibles." />
          </ListItem>
        )}
      </List>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Editar Notificación</DialogTitle>
        <DialogContent>
          <TextField
            label="Título"
            variant="outlined"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Mensaje"
            variant="outlined"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Notificaciones;

