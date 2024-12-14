import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Typography, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { TextField as MuiTextField } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [scheduledAt, setScheduledAt] = useState(null);
  const [editId, setEditId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Solicitar permisos para las notificaciones al montar el componente
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          console.warn('Permisos de notificaciones denegados');
        }
      });
    }
  }, []);

  // Cargar las notificaciones desde la API
  useEffect(() => {
    fetchNotificaciones();
  }, []);

  const fetchNotificaciones = async () => {
    try {
      const response = await axios.get('/api/notificaciones');
      setNotificaciones(response.data.data || []);
    } catch (error) {
      console.error("Error al obtener las notificaciones:", error);
    }
  };

  // Enviar una notificación emergente del navegador
  const sendNotification = async (notificacion) => {
    if (Notification.permission === 'granted') {
      new Notification(notificacion.titulo, { body: notificacion.mensaje });

      // Marcar como notificada en la base de datos
      try {
        await axios.put(`/api/notificaciones?id=${notificacion.id}`, {
          ...notificacion,
          notified: true,
        });

        // Actualizar el estado local
        setNotificaciones((prevNotificaciones) =>
          prevNotificaciones.map((n) =>
            n.id === notificacion.id ? { ...n, notified: true } : n
          )
        );
      } catch (error) {
        console.error('Error al actualizar el estado de notificación:', error);
      }
    }
  };

  // Verificar notificaciones programadas
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      notificaciones.forEach((notificacion) => {
        const scheduledDate = new Date(notificacion.scheduledAt);
        
        // Verificar si es el momento para mostrar la notificación
        if (scheduledDate <= now && !notificacion.notified) {
          // Aquí mostramos el alert solo si no ha sido notificada
         // alert(`${notificacion.titulo}: ${notificacion.mensaje}`);

          // Marcar como notificada
          sendNotification(notificacion);
        }
      });
    }, 60000); // Comprobar cada minuto

    return () => clearInterval(interval);
  }, [notificaciones]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !mensaje || !scheduledAt) {
      return alert("Todos los campos son obligatorios.");
    }

    const datos = { titulo, mensaje, scheduledAt: scheduledAt.toISOString(), id: editId, notified: false };
    console.log(scheduledAt.toISOString())
    try {
      if (editId) {
        // Actualizar notificación existente
        const updatedNotificaciones = notificaciones.map((notificacion) =>
          notificacion.id === editId ? { ...notificacion, ...datos } : notificacion
        );
        setNotificaciones(updatedNotificaciones);

        // Llamar al servidor para actualizar la notificación
        await axios.put(`/api/notificaciones?id=${editId}`, datos);
      } else {
        // Crear nueva notificación
        const response = await axios.post('/api/notificaciones', datos);
        setNotificaciones([...notificaciones, response.data.data]);
      }
      alert("Se guardó la notificación");

      setTitulo('');
      setMensaje('');
      setScheduledAt(null);
      setEditId(null);
      setOpenDialog(false);
    } catch (error) {
      console.error("Error al guardar la notificación:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Llamar al servidor para eliminar la notificación
      await axios.delete(`/api/notificaciones?id=${id}`);

      // Eliminar la notificación de la lista de notificaciones
      setNotificaciones(notificaciones.filter((notificacion) => notificacion.id !== id));
    } catch (error) {
      console.error("Error al eliminar la notificación:", error);
    }
  };

  const handleEdit = (notificacion) => {
    setTitulo(notificacion.titulo);
    setMensaje(notificacion.mensaje);
    setScheduledAt(new Date(notificacion.scheduledAt));
    setEditId(notificacion.id);
    setOpenDialog(true);
  };

  const handleAdd = () => {
    setTitulo('');
    setMensaje('');
    setScheduledAt(null);
    setEditId(null);
    setOpenDialog(true);
  };

  // Componente CustomInput para DatePicker
  const CustomInput = ({ value, onClick }) => (
    <MuiTextField
      label="Fecha y Hora"
      value={value}
      onClick={onClick}
      fullWidth
      variant="outlined"
      margin="normal"
      sx={{
        // Reducir el tamaño del campo
        '& .MuiInputBase-root': {
          fontSize: '0.875rem', // Tamaño de fuente más pequeño
        },
        maxWidth: 500, // Ancho máximo
      }}
    />
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: "#c20000" }}>
        Gestión de Notificaciones
      </Typography>

      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Agregar Notificación
        </Button>
      </Box>

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

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{editId ? 'Editar Notificación' : 'Nueva Notificación'}</DialogTitle>
        <DialogContent sx={{ padding: 3 }}>
          <TextField
            label="Título"
            fullWidth
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            margin="normal"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Mensaje"
            fullWidth
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            margin="normal"
            sx={{ marginBottom: 2 }}
          />
          <DatePicker
            selected={scheduledAt}
            onChange={(date) => setScheduledAt(date)}
            showTimeSelect
            dateFormat="Pp"
            timeIntervals={5}
            minDate={new Date()}
            customInput={<CustomInput />}
            sx={{
              width: '50%', // Asegura que ocupe todo el ancho disponible
              maxWidth: 50, // Ajusta el tamaño máximo si lo necesitas
            }}
          />
        </DialogContent>
        <DialogActions sx={{ padding: 5 }}>
          <Button onClick={() => setOpenDialog(false)} color="primary" sx={{ padding: '10px 20px' }}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary" sx={{ padding: '10px 20px' }}>
            {editId ? 'Actualizar' : 'Agregar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Notificaciones;
