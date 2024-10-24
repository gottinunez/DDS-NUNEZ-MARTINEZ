import React, { useState } from 'react';

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [texto, setTexto] = useState('');
  const [indexModificacion, setIndexModificacion] = useState(null);

  const agregarNotificacion = () => {
    if (texto.trim() === '') return;
    if (indexModificacion !== null) {
      // Modificar la notificación existente
      const nuevasNotificaciones = [...notificaciones];
      nuevasNotificaciones[indexModificacion] = texto;
      setNotificaciones(nuevasNotificaciones);
      setIndexModificacion(null);
    } else {
      // Agregar una nueva notificación
      setNotificaciones([...notificaciones, texto]);
    }
    setTexto('');
  };

  const editarNotificacion = (index) => {
    setTexto(notificaciones[index]);
    setIndexModificacion(index);
  };

  const eliminarNotificacion = (index) => {
    const nuevasNotificaciones = notificaciones.filter((_, i) => i !== index);
    setNotificaciones(nuevasNotificaciones);
  };

  return (
    <div>
      <h2>Notificaciones/noticias</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una notificación"
      />
      <button onClick={agregarNotificacion}>
        {indexModificacion !== null ? 'Modificar Notificación' : 'Agregar Notificación'}
      </button>
      <ul>
        {notificaciones.map((notificacion, index) => (
          <li key={index}>
            {notificacion}
            <button onClick={() => editarNotificacion(index)}>Editar</button>
            <button onClick={() => eliminarNotificacion(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notificaciones;

