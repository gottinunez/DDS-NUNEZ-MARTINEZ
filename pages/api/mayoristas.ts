// pages/api/mayoristas/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Obtener todos los mayoristas
const getMayoristas = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const mayoristas = await prisma.mayorista.findMany();
    res.status(200).json(mayoristas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los mayoristas.' });
  }
};

// Crear un mayorista
const createMayorista = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nombre, pagina_web, ubicacion } = req.body;

  if (!nombre || !pagina_web || !ubicacion) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const mayorista = await prisma.mayorista.create({
      data: { nombre, pagina_web, ubicacion },
    });
    res.status(201).json(mayorista);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el mayorista.' });
  }
};

// Actualizar un mayorista
const updateMayorista = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, nombre, pagina_web, ubicacion } = req.body;

  if (!id || !nombre || !pagina_web || !ubicacion) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const mayorista = await prisma.mayorista.update({
      where: { id },
      data: { nombre, pagina_web, ubicacion },
    });
    res.status(200).json(mayorista);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el mayorista.' });
  }
};

// Eliminar un mayorista
const deleteMayorista = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'El ID es requerido' });
  }

  try {
    await prisma.mayorista.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Mayorista eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el mayorista.' });
  }
};

// Manejo de la solicitud según el método HTTP
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getMayoristas(req, res);
    case 'POST':
      return createMayorista(req, res);
    case 'PUT':
      return updateMayorista(req, res);
    case 'DELETE':
      return deleteMayorista(req, res);
    default:
      res.status(405).json({ error: 'Método no permitido' });
  }
}
