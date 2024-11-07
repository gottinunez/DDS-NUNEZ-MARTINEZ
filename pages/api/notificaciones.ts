import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type ResponseData = {
  message: string
  data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Mensaje recibido' })
  if (req.method === 'POST') {
    const { titulo, mensaje } = req.body

    if (!titulo || !mensaje) {
      return res.status(400).json({ message: 'El título y el mensaje son obligatorios' })
    }

    try {
      // Guardar los datos en la base de datos
      const nuevaNotificacion = await prisma.notificacion.create({
        data: {
          titulo,
          mensaje
        }
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

  // Si el método no es POST, devolver error 405 (Método no permitido)
  return res.status(405).json({ message: 'Método no permitido' })
}
