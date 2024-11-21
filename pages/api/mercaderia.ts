import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../db"

type ResponseData = {
  message: string
  data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req
  const { id } = req.query  // Obtenemos el id desde la URL para los métodos PUT y DELETE
  const { nombre, precio, marca, stockDisponible } = req.body

  if (method === 'GET') {
    // GET: Obtener todas las mercaderías
    try {
      const mercaderia = await db.mercaderia.findMany()
      return res.status(200).json({
        message: 'Mercaderías obtenidas exitosamente',
        data: mercaderia
      })
    } catch (error) {
      console.error('Error al obtener las mercaderías:', error)
      return res.status(500).json({ message: 'Error al obtener las mercaderías' })
    }
  }

  if (method === 'POST') {
    // POST: Crear nueva mercadería
    if (!nombre || !precio || !marca || !stockDisponible) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }

    try {
      const nuevaMercaderia = await db.mercaderia.create({
        data: { nombre, precio, marca, stockDisponible }
      })

      return res.status(201).json({
        message: 'Mercadería creada exitosamente',
        data: nuevaMercaderia
      })
    } catch (error) {
      console.error('Error al guardar la mercadería:', error)
      return res.status(500).json({ message: 'Error al guardar la mercadería' })
    }
  }

  if (method === 'PUT') {
    // PUT: Actualizar una mercadería existente
    if (!id || !nombre || !precio || !marca || !stockDisponible) {
      return res.status(400).json({ message: 'ID, nombre, precio, marca y stock disponible son obligatorios' })
    }

    try {
      const mercaderiaExistente = await db.mercaderia.findUnique({
        where: { id: Number(id) }
      })

      if (!mercaderiaExistente) {
        return res.status(404).json({ message: 'Mercadería no encontrada' })
      }

      const mercaderiaActualizada = await db.mercaderia.update({
        where: { id: Number(id) },
        data: { nombre, precio, marca, stockDisponible }
      })

      return res.status(200).json({
        message: 'Mercadería actualizada exitosamente',
        data: mercaderiaActualizada
      })
    } catch (error) {
      console.error('Error al actualizar la mercadería:', error)
      return res.status(500).json({ message: 'Error al actualizar la mercadería' })
    }
  }

  if (method === 'DELETE') {
    // DELETE: Eliminar una mercadería existente
    if (!id) {
      return res.status(400).json({ message: 'ID es obligatorio' })
    }

    try {
      const mercaderiaExistente = await db.mercaderia.findUnique({
        where: { id: Number(id) }
      })

      if (!mercaderiaExistente) {
        return res.status(404).json({ message: 'Mercadería no encontrada' })
      }

      await db.mercaderia.delete({
        where: { id: Number(id) }
      })

      return res.status(200).json({
        message: 'Mercadería eliminada exitosamente'
      })
    } catch (error) {
      console.error('Error al eliminar la mercadería:', error)
      return res.status(500).json({ message: 'Error al eliminar la mercadería' })
    }
  }

  // Si el método no es GET, POST, PUT ni DELETE, devolver error 405 (Método no permitido)
  return res.status(405).json({ message: 'Método no permitido' })
}
