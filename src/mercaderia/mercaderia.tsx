import { useState, useEffect } from 'react'
import { Container, Grid, TextField, Button, Typography, Card, CardContent, CardActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gestión de Mercadería</h1>

      {/* Formulario */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <form onSubmit={manejarSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">Precio</label>
              <input
                type="number"
                value={precio}
                onChange={(e) => setPrecio(Number(e.target.value))}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">Marca</label>
              <input
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">Stock Disponible</label>
              <input
                type="number"
                value={stockDisponible}
                onChange={(e) => setStockDisponible(Number(e.target.value))}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              {editId ? 'Actualizar Mercadería' : 'Crear Mercadería'}
            </button>
          </div>
        </form>

        {/* Mensajes de error */}
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </div>

      {/* Lista de mercaderías */}
      <h2 className="text-2xl font-semibold mb-4">Lista de Mercaderías</h2>
      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Precio</th>
              <th className="py-2 px-4 text-left">Marca</th>
              <th className="py-2 px-4 text-left">Stock Disponible</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mercaderias.map((mercaderia) => (
              <tr key={mercaderia.id} className="border-b">
                <td className="py-2 px-4">{mercaderia.nombre}</td>
                <td className="py-2 px-4">${mercaderia.precio}</td>
                <td className="py-2 px-4">{mercaderia.marca}</td>
                <td className="py-2 px-4">{mercaderia.stockDisponible}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => manejarEditar(mercaderia)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => manejarEliminar(mercaderia.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Mercaderia
