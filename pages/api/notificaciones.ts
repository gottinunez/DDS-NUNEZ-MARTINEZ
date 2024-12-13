import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db';
import schedule from 'node-schedule'; // Importamos node-schedule

type ResponseData = {
  message: string;
  data?: any;
};

let scheduledJobs: { [key: number]: schedule.Job } = {}; // Guardamos las notificaciones programadas

// Función para enviar la notificación
const sendNotification = async (notificacion: any) => {
  // Enviar la notificación al navegador (o puedes hacer algo más aquí)
  console.log('Enviando notificación:', notificacion.titulo, notificacion.mensaje);

  // Actualizar la notificación como enviada en la base de datos
  try {
    await db.notificacion.update({
      where: { id: notificacion.id },
      data: { isSent: true },
    });
  } catch (error) {
    console.error('Error al marcar la notificación como enviada:', error);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { method } = req;
  const { id } = req.query; // ID para métodos PUT y DELETE
  const { titulo, mensaje, scheduledAt } = req.body; // Agregamos `scheduledAt` para POST y PUT

  if (method === 'GET') {
    // GET: Obtener todas las notificaciones
    try {
      const notificaciones = await db.notificacion.findMany();
      return res.status(200).json({
        message: 'Notificaciones obtenidas exitosamente',
        data: notificaciones,
      });
    } catch (error) {
      console.error('Error al obtener las notificaciones:', error);
      return res.status(500).json({ message: 'Error al obtener las notificaciones' });
    }
  }

  if (method === 'POST') {
    // POST: Crear nueva notificación
    if (!titulo || !mensaje || !scheduledAt) {
      return res.status(400).json({ message: 'El título, mensaje y fecha de programación son obligatorios' });
    }

    try {
      // Crear la nueva notificación en la base de datos
      const nuevaNotificacion = await db.notificacion.create({
        data: {
          titulo,
          mensaje,
          scheduledAt: new Date(scheduledAt), 
        },
      });

      // Si la notificación tiene una fecha programada, programamos el trabajo
      const scheduledDate = new Date(scheduledAt);
      if (scheduledDate > new Date()) {
        scheduledJobs[nuevaNotificacion.id] = schedule.scheduleJob(scheduledDate, () => {
          sendNotification(nuevaNotificacion);
        });
      }

      return res.status(201).json({
        message: 'Notificación creada exitosamente',
        data: nuevaNotificacion,
      });
    } catch (error) {
      console.error('Error al guardar la notificación:', error);
      return res.status(500).json({ message: 'Error al guardar la notificación' });
    }
  }

  if (method === 'PUT') {
    // PUT: Actualizar una notificación existente
    if (!id || !titulo || !mensaje || !scheduledAt) {
      return res.status(400).json({ message: 'ID, título, mensaje y fecha de programación son obligatorios' });
    }

    const notificationId = Number(id); // Convertir id a número

    try {
      const notificacionExistente = await db.notificacion.findUnique({
        where: { id: notificationId },
      });

      if (!notificacionExistente) {
        return res.status(404).json({ message: 'Notificación no encontrada' });
      }

      const notificacionActualizada = await db.notificacion.update({
        where: { id: notificationId },
        data: {
          titulo,
          mensaje,
          scheduledAt: new Date(scheduledAt), // Convertimos `scheduledAt` a un objeto Date
        },
      });

      // Si la notificación ha sido reprogramada, actualizamos el trabajo programado
      const scheduledDate = new Date(scheduledAt);
      if (scheduledDate > new Date()) {
        // Cancelar el trabajo anterior si existía
        if (scheduledJobs[notificationId]) {
          scheduledJobs[notificationId].cancel();
        }

        // Programar el nuevo trabajo
        scheduledJobs[notificationId] = schedule.scheduleJob(scheduledDate, () => {
          sendNotification(notificacionActualizada);
        });
      }

      return res.status(200).json({
        message: 'Notificación actualizada exitosamente',
        data: notificacionActualizada,
      });
    } catch (error) {
      console.error('Error al actualizar la notificación:', error);
      return res.status(500).json({ message: 'Error al actualizar la notificación' });
    }
  }

  if (method === 'DELETE') {
    // DELETE: Eliminar una notificación existente
    if (!id) {
      return res.status(400).json({ message: 'ID es obligatorio' });
    }

    const notificationId = Number(id); // Convertir id a número

    try {
      const notificacionExistente = await db.notificacion.findUnique({
        where: { id: notificationId },
      });

      if (!notificacionExistente) {
        return res.status(404).json({ message: 'Notificación no encontrada' });
      }

      // Eliminar el trabajo programado si existe
      if (scheduledJobs[notificationId]) {
        scheduledJobs[notificationId].cancel();
      }

      await db.notificacion.delete({
        where: { id: notificationId },
      });

      return res.status(200).json({
        message: 'Notificación eliminada exitosamente',
      });
    } catch (error) {
      console.error('Error al eliminar la notificación:', error);
      return res.status(500).json({ message: 'Error al eliminar la notificación' });
    }
  }

  // Si el método no es GET, POST, PUT ni DELETE, devolver error 405 (Método no permitido)
  return res.status(405).json({ message: 'Método no permitido' });
}
