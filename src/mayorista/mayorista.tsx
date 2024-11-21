// pages/mayoristas.tsx

import { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container, Typography, Card, CardContent, CardActions } from '@mui/material';
type Mayorista = {
  id: number;
  nombre: string;
  pagina_web: string;
  ubicacion: string;
};

const MayoristasPage = () => {
  const [mayoristas, setMayoristas] = useState<Mayorista[]>([]);
  const [formData, setFormData] = useState<Mayorista>({
    id: 0,
    nombre: '',
    pagina_web: '',
    ubicacion: '',
  });

  // Cargar mayoristas al cargar la página
  useEffect(() => {
    const fetchMayoristas = async () => {
      const response = await fetch('/api/mayoristas');
      const data = await response.json();
      setMayoristas(data);
    };

    fetchMayoristas();
  }, []);

  // Manejo del cambio de datos en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejo de la creación o actualización del mayorista
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = formData.id ? 'PUT' : 'POST';
    const url = formData.id ? '/api/mayoristas' : '/api/mayoristas';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (method === 'POST') {
      setMayoristas([...mayoristas, data]);
    } else {
      setMayoristas(mayoristas.map((m) => (m.id === formData.id ? data : m)));
    }

    // Limpiar formulario después de enviar
    setFormData({
      id: 0,
      nombre: '',
      pagina_web: '',
      ubicacion: '',
    });
  };

  // Manejo de la eliminación de un mayorista
  const handleDelete = async (id: number) => {
    await fetch('/api/mayoristas', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setMayoristas(mayoristas.filter((mayorista) => mayorista.id !== id));
  };

  // Manejo de la edición de un mayorista
  const handleEdit = (mayorista: Mayorista) => {
    setFormData(mayorista);
  };

  return (
<Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom color={"#ffff"}>
        Mayoristas
      </Typography>

      {/* Formulario de Crear/Editar Mayorista */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Página Web"
                  variant="outlined"
                  fullWidth
                  name="pagina_web"
                  value={formData.pagina_web}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Ubicación"
                  variant="outlined"
                  fullWidth
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} textAlign="right">
                <Button type="submit" variant="contained" color="primary">
                  {formData.id ? 'Actualizar' : 'Agregar'} Mayorista
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {/* Lista de Mayoristas */}
      <Typography variant="h5" gutterBottom color={"#ffff"}>
        Lista de Mayoristas
      </Typography>
      {mayoristas.map((mayorista) => (
        <Card key={mayorista.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{mayorista.nombre}</Typography>
            <Typography variant="body2" color="textSecondary">
              {mayorista.ubicacion}
            </Typography>
            <a href={mayorista.pagina_web} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: 8 }}>
              {mayorista.pagina_web}
            </a>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleEdit(mayorista)}>
              Editar
            </Button>
            <Button size="small" color="error" onClick={() => handleDelete(mayorista.id)}>
              Eliminar
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};


export default MayoristasPage;
