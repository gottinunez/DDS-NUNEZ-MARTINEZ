import React, { useState, useEffect } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
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
      const response = await axios.get('http://localhost:3000/api/notificaciones');
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
        await axios.put(`http://localhost:3000/api/notificaciones?id=${editId}`, { titulo, mensaje });
        console.log(`Notificación con ID ${editId} actualizada.`);
      } else {
        // Agregar nueva notificación
        const newNotificacion = { ...datos };
        setNotificaciones([...notificaciones, newNotificacion]);

        // Agregar en la base de datos
        await axios.post('http://localhost:3000/api/notificaciones', newNotificacion);
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
      await axios.delete(`http://localhost:3000/api/notificaciones?id=${id}`);

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
    <div>
      <Button variant="contained" onClick={handleAdd}>Agregar Notificación</Button>
      <List>
        {notificaciones.map((notificacion) => (
          <ListItem key={notificacion.id}>
            <ListItemText
              primary={notificacion.titulo}
              secondary={notificacion.mensaje}
            />
            <IconButton onClick={() => handleEdit(notificacion)}><EditIcon /></IconButton>
            <IconButton onClick={() => handleDelete(notificacion.id)}><DeleteIcon /></IconButton>
          </ListItem>
        ))}
      </List>

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
          <Button onClick={() => setOpenDialog(false)} color="primary">Cancelar</Button>
          <Button onClick={handleSubmit} color="primary">{editId ? 'Actualizar' : 'Agregar'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Notificaciones;
