/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notificaciones = () => {
    const [notificaciones, setNotificaciones] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [editId, setEditId] = useState(null);

    // Obtener notificaciones al cargar el componente
    useEffect(() => {
        fetchNotificaciones();
    }, []);

    const fetchNotificaciones = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/notificaciones');
            const data = response.data;
            setNotificaciones(Array.isArray(data) ? data : []);
            console.log("Notificaciones recibidas:", data);
        } catch (error) {
            console.error("Error al obtener notificaciones:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const datos = { titulo, mensaje };
        console.log('Datos enviados:', datos);
        
        try {
            if (editId) {
                await axios.put(`http://localhost:3000/api/notificaciones/${editId}`, datos);
                console.log(`Notificación con ID ${editId} actualizada.`);
            } else {
                await axios.post('http://localhost:3000/api/notificaciones', datos);
                console.log("Notificación creada.");
            }
            setTitulo('');
            setMensaje('');
            setEditId(null);
            fetchNotificaciones();
        } catch (error) {
            console.error("Error al enviar la notificación:", error);
        }
    };

    const handleEdit = (notificacion) => {
        setTitulo(notificacion.titulo);
        setMensaje(notificacion.mensaje);
        setEditId(notificacion.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/notificaciones/${id}`);
            console.log(`Notificación con ID ${id} eliminada.`);
            fetchNotificaciones();
        } catch (error) {
            console.error("ErrhandleSubmitor al eliminar la notificación:", error);
        }
    };

    return (
      <div>
          <h1>Notificaciones</h1>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  placeholder="Título"
                  required
              />
              <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Mensaje"
                  required
              />
              <button type="submit">{editId ? 'Editar' : 'Agregar'} Notificación</button>
          </form>
          <ul>
              {notificaciones.map((notificacion) => (
                  <li key={notificacion.id}>
                      <strong>{notificacion.titulo}</strong>: {notificacion.mensaje}
                      <button onClick={() => handleEdit(notificacion)}>Editar</button>
                      <button onClick={() => handleDelete(notificacion.id)}>Eliminar</button>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default Notificaciones;*/

/*import React, { useState, useEffect } from 'react';
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

  // Cargar las notificaciones desde la API y localStorage cuando el componente se monte
  useEffect(() => {
    fetchNotificaciones();
  }, []);

  // Obtener las notificaciones desde la API
  const fetchNotificaciones = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/notificaciones');
      // Verificar si la respuesta es un arreglo
      const data = Array.isArray(response.data) ? response.data : [];
      setNotificaciones(data);
    } catch (error) {
      console.error("Error al obtener las notificaciones:", error);
      setNotificaciones([]);  // Establecer un arreglo vacío en caso de error
    }
  };

  // Función para agregar o editar notificación
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = { titulo, mensaje };

    try {
      if (editId) {
        // Editar notificación
        await axios.put('http://localhost:3000/api/notificaciones', { id: editId, ...datos });
        console.log(`Notificación con ID ${editId} actualizada.`);
      } else {
        // Crear una nueva notificación
        await axios.post('http://localhost:3000/api/notificaciones', datos);
        console.log("Notificación creada.");
      }
      // Recargar las notificaciones
      fetchNotificaciones();
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
      await axios.delete(`http://localhost:3000/api/notificaciones?id=${id}`);
      console.log(`Notificación con ID ${id} eliminada.`);
      fetchNotificaciones();
    } catch (error) {
      console.error("Error al eliminar la notificación:", error);
    }
  };

  return (
    <div>
      <h1>Notificaciones</h1>

      {/* Formulario para agregar o editar notificación */
      /*<form onSubmit={handleSubmit}>
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

      {/* Lista de notificaciones */
      /*<List>
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

      {/* Diálogo de edición */
      /*<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
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

export default Notificaciones;*/

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

