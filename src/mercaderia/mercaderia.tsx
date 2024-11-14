import { useEffect, useState } from "react";

type Mercaderia = {
  id: number;
  nombre: string;
  precio: number;
  marca: string;
  stockDisponible: number;
};

const MercaderiaPage = () => {
  const [mercaderia, setMercaderia] = useState<Mercaderia[]>([]);
  const [formData, setFormData] = useState<Omit<Mercaderia, "id">>({
    nombre: "",
    precio: 0,
    marca: "",
    stockDisponible: 0,
  });

  // Obtener la lista de mercadería desde la base de datos
  const fetchMercaderia = async () => {
    const response = await fetch("/api/mercaderia");
    const data = await response.json();
    setMercaderia(data);
  };

  useEffect(() => {
    fetchMercaderia(); // Llamamos a fetch al montar el componente
  }, []);

  // Manejar el cambio de datos en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Agregar un nuevo producto a la base de datos y actualizar la UI
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Agregar mercadería a la base de datos
    const response = await fetch("/api/mercaderia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Si la respuesta es exitosa, agregar la mercadería al estado
    if (response.ok) {
      const newMercaderia = await response.json();
      setMercaderia([...mercaderia, newMercaderia]); // Añadir al estado de mercaderia
    }

    // Limpiar el formulario después de agregar
    setFormData({ nombre: "", precio: 0, marca: "", stockDisponible: 0 });
  };

  // Eliminar mercadería
  const handleDelete = async (id: number) => {
    const response = await fetch("/api/mercaderia", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    // Si la eliminación es exitosa, actualizar el estado de mercaderia
    if (response.ok) {
      setMercaderia(mercaderia.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <h1>Lista de Mercadería</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Marca</th>
            <th>Stock Disponible</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mercaderia.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{item.marca}</td>
              <td>{item.stockDisponible}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Añadir Mercadería</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          value={formData.marca}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="stockDisponible"
          placeholder="Stock Disponible"
          value={formData.stockDisponible}
          onChange={handleInputChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default MercaderiaPage;
