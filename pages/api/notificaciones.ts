import type { NextApiRequest, NextApiResponse } from 'next'
// import { dbClient } from '@db/client'

// const db = new dbClient()
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
  const { titulo, mensaje } = req.body

  if (method === 'GET') {
    // GET: Obtener todas las notificaciones
    try {
      const notificaciones = await db.notificacion.findMany()
      return res.status(200).json({
        message: 'Notificaciones obtenidas exitosamente',
        data: notificaciones
      })
    } catch (error) {
      console.error('Error al obtener las notificaciones:', error)
      return res.status(500).json({ message: 'Error al obtener las notificaciones' })
    }
  }

  if (method === 'POST') {
    // POST: Crear nueva notificación
    if (!titulo || !mensaje) {
      return res.status(400).json({ message: 'El título y el mensaje son obligatorios' })
    }

    try {
      const nuevaNotificacion = await db.notificacion.create({
        data: { titulo, mensaje }
      })

      return res.status(201).json({
        message: 'Notificación creada exitosamente',
        data: nuevaNotificacion
      })
    } catch (error) {
      console.error('Error al guardar la notificación:', error)
      return res.status(500).json({ message: 'Error al guardar la notificación' })
    }
  }

  if (method === 'PUT') {
    // PUT: Actualizar una notificación existente
    if (!id || !titulo || !mensaje) {
      return res.status(400).json({ message: 'ID, título y mensaje son obligatorios' })
    }

    try {
      const notificacionExistente = await db.notificacion.findUnique({
        where: { id: Number(id) }
      })

      if (!notificacionExistente) {
        return res.status(404).json({ message: 'Notificación no encontrada' })
      }

      const notificacionActualizada = await db.notificacion.update({
        where: { id: Number(id) },
        data: { titulo, mensaje }
      })

      return res.status(200).json({
        message: 'Notificación actualizada exitosamente',
        data: notificacionActualizada
      })
    } catch (error) {
      console.error('Error al actualizar la notificación:', error)
      return res.status(500).json({ message: 'Error al actualizar la notificación' })
    }
  }

  if (method === 'DELETE') {
    // DELETE: Eliminar una notificación existente
    if (!id) {
      return res.status(400).json({ message: 'ID es obligatorio' })
    }

    try {
      const notificacionExistente = await db.notificacion.findUnique({
        where: { id: Number(id) }
      })

      if (!notificacionExistente) {
        return res.status(404).json({ message: 'Notificación no encontrada' })
      }

      await db.notificacion.delete({
        where: { id: Number(id) }
      })

      return res.status(200).json({
        message: 'Notificación eliminada exitosamente'
      })
    } catch (error) {
      console.error('Error al eliminar la notificación:', error)
      return res.status(500).json({ message: 'Error al eliminar la notificación' })
    }
  }

  // Si el método no es GET, POST, PUT ni DELETE, devolver error 405 (Método no permitido)
  return res.status(405).json({ message: 'Método no permitido' })
}