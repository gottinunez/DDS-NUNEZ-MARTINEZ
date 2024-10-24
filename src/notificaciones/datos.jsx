// src/Datos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Datos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await axios.get('http://localhost:5000/api/datos');
      setDatos(response.data);
    };
    fetchDatos();
  }, []);

  return (
    <div>
      <h2>Datos desde la Base de Datos</h2>
      <ul>
        {datos.map((dato) => (
          <li key={dato.id}>{dato.contenido}</li> // Asegúrate de que 'contenido' es una propiedad válida
        ))}
      </ul>
    </div>
  );
};

export default Datos;
