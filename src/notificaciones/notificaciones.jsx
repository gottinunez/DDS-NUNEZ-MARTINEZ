import React, { useState, useEffect } from 'react';
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
            const response = await axios.get('http://localhost:3001/notificaciones');
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
                await axios.put(`http://localhost:3001/api/notificaciones/${editId}`, datos);
                console.log(`Notificación con ID ${editId} actualizada.`);
            } else {
                await axios.post('http://localhost:3001/api/notificaciones', datos);
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
            await axios.delete(`http://localhost:3001/notificaciones/${id}`);
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

export default Notificaciones;
