import { useState, useEffect } from 'react'
import { TextField, Button, Typography, Grid, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress } from '@mui/material';

type Mercaderia = {
  id: number
  nombre: string
  precio: number
  marca: string
  stockDisponible: number
}

const Mercaderia = () => {
  const [mercaderias, setMercaderias] = useState<Mercaderia[]>([])
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState(0)
  const [marca, setMarca] = useState('')
  const [stockDisponible, setStockDisponible] = useState(0)
  const [editId, setEditId] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // Cargar todas las mercaderías
  const cargarMercaderias = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/mercaderia')
      const data = await res.json()
      setMercaderias(data.data)
    } catch (error) {
      setError('Error al cargar las mercaderías.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cargarMercaderias()
  }, [])

  // Crear o actualizar una mercadería
  const manejarSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mercaderia = { nombre, precio, marca, stockDisponible }
    setLoading(true)
    setError('')
    try {
      const method = editId === null ? 'POST' : 'PUT'
      const url = editId ? `/api/mercaderia?id=${editId}` : '/api/mercaderia'
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mercaderia),
      })

      const data = await res.json()
      alert(data.message)

      // Limpiar el formulario
      setNombre('')
      setPrecio(0)
      setMarca('')
      setStockDisponible(0)
      setEditId(null)

      // Recargar las mercaderías después de la creación o actualización
      cargarMercaderias()
    } catch (error) {
      setError('Hubo un error al guardar la mercadería.')
    } finally {
      setLoading(false)
    }
  }

  // Eliminar una mercadería
  const manejarEliminar = async (id: number) => {
    if (confirm('¿Estás seguro de eliminar esta mercadería?')) {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(`/api/mercaderia?id=${id}`, {
          method: 'DELETE',
        })
        const data = await res.json()
        alert(data.message)

        // Recargar las mercaderías después de la eliminación
        cargarMercaderias()
      } catch (error) {
        setError('Hubo un error al eliminar la mercadería.')
      } finally {
        setLoading(false)
      }
    }
  }

  // Editar una mercadería
  const manejarEditar = (mercaderia: Mercaderia) => {
    setNombre(mercaderia.nombre)
    setPrecio(mercaderia.precio)
    setMarca(mercaderia.marca)
    setStockDisponible(mercaderia.stockDisponible)
    setEditId(mercaderia.id)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{color:"#c20000"}}>
        Gestión de Mercadería
      </Typography>

      {/* Formulario */}
      <Paper sx={{ p: 4, mb: 4, borderRadius: 2, boxShadow: 3 }}>
        <form onSubmit={manejarSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Precio"
                type="number"
                value={precio}
                onChange={(e) => setPrecio(Number(e.target.value))}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Stock Disponible"
                type="number"
                value={stockDisponible}
                onChange={(e) => setStockDisponible(Number(e.target.value))}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {editId ? 'Actualizar Mercadería' : 'Crear Mercadería'}
          </Button>
        </form>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Paper>
      <Typography variant="h6" gutterBottom sx={{color:"#c20000"}}>
        Lista de Mercaderías
      </Typography>

      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Stock Disponible</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mercaderias.map((mercaderia) => (
                <TableRow key={mercaderia.id}>
                  <TableCell>{mercaderia.nombre}</TableCell>
                  <TableCell>${mercaderia.precio}</TableCell>
                  <TableCell>{mercaderia.marca}</TableCell>
                  <TableCell>{mercaderia.stockDisponible}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => manejarEditar(mercaderia)}
                      variant="outlined"
                      color="warning"
                      sx={{ mr: 1 }}
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => manejarEliminar(mercaderia.id)}
                      variant="outlined"
                      color="error"
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};


export default Mercaderia
