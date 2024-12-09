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
  const [scheduledAt, setScheduledAt] = useState(null); // Agregado para la fecha y hora
  const [editId, setEditId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Solicitar permisos para las notificaciones al montar el componente
  useEffect(() => {
    // Verificar si ya se tienen permisos para las notificaciones
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notificaciones habilitadas');
        } else {
          console.log('Notificaciones denegadas');
        }
      });
    }
  }, []);

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

  // Función para enviar notificación
  const sendNotification = (titulo, mensaje) => {
    if (Notification.permission === 'granted') {
      new Notification(titulo, { body: mensaje });
    }
  };

  // useEffect para verificar y disparar notificaciones programadas
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      notificaciones.forEach((notificacion) => {
        const scheduledDate = new Date(notificacion.scheduledAt);
        if (scheduledDate <= now && !notificacion.notified) {
          sendNotification(notificacion.titulo, notificacion.mensaje);
          // Marcar la notificación como notificada
          notificacion.notified = true;
          // Actualizar el estado de las notificaciones
          setNotificaciones(prevNotificaciones =>
            prevNotificaciones.map(n =>
              n.id === notificacion.id ? { ...n, notified: true } : n
            )
          );
        }
      });
    }, 60000); // Comprobar cada minuto

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [notificaciones]);

  // Función para agregar o editar notificación
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !mensaje || !scheduledAt) {
      return alert("Todos los campos son obligatorios.");
    }

    const datos = { titulo, mensaje, scheduledAt: scheduledAt.toISOString(), id: editId, notified: false }; // Agregar un campo "notified"

    try {
      if (editId) {
        // Editar notificación
        const updatedNotificaciones = notificaciones.map((notificacion) =>
          notificacion.id === editId ? { ...notificacion, ...datos } : notificacion
        );
        setNotificaciones(updatedNotificaciones);

        // Actualizar en la base de datos
        await axios.put(`http://localhost:3000/api/notificaciones?id=${editId}`, datos);
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
      setScheduledAt(null); // Limpiar el valor de fecha y hora
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
    setScheduledAt(new Date(notificacion.scheduledAt)); // Establecer la fecha programada para la edición
    setEditId(notificacion.id);
    setOpenDialog(true);
  };

  // Función para abrir el diálogo de agregar nueva notificación
  const handleAdd = () => {
    setTitulo('');
    setMensaje('');
    setScheduledAt(null); // Limpiar la fecha
    setEditId(null);
    setOpenDialog(true);
  };

  // Función para el custom input para el DatePicker
  const CustomInput = ({ value, onClick }) => (
    <MuiTextField
      label="Fecha y Hora"
      value={value}
      onClick={onClick}
      fullWidth
      variant="outlined"
      margin="normal"
    />
  );

  return (
    <Box sx={{ padding: 3 }}>
      {/* Título principal */}
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: "#c20000" }}>
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
