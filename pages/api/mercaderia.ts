// /pages/api/mercaderia.ts
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Obtener todos los productos
    try {
      const mercaderia = await db.mercaderia.findMany();
      res.status(200).json(mercaderia);
    } catch (error) {
      res.status(500).json({ error: "Error fetching mercaderia" });
    }
  } else if (req.method === "POST") {
    // Crear un nuevo producto
    const { nombre, precio, marca, stockDisponible } = req.body;
    try {
      const newMercaderia = await db.mercaderia.create({
        data: {
          nombre,
          precio,
          marca,
          stockDisponible,
        },
      });
      res.status(201).json(newMercaderia); // Devolver el producto creado
    } catch (error) {
      res.status(500).json({ error: "Error creating mercaderia" });
    }
  } else if (req.method === "DELETE") {
    // Eliminar un producto por ID
    const { id } = req.body;
    try {
      await db.mercaderia.delete({
        where: { id },
      });
      res.status(200).json({ message: "Producto eliminado" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting mercaderia" });
    }
  } else {
    // Método no permitido
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
