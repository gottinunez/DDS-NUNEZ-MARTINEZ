// database.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: './notificaciones.db',
  driver: sqlite3.Database,
});

export async function initDb() {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT NOT NULL
  )`);
}

export async function getNotifications() {
  const db = await dbPromise;
  return await db.all('SELECT * FROM notifications');
}

export async function addNotification(message) {
  const db = await dbPromise;
  await db.run('INSERT INTO notifications (message) VALUES (?)', [message]);
}

export async function updateNotification(id, message) {
  const db = await dbPromise;
  await db.run('UPDATE notifications SET message = ? WHERE id = ?', [message, id]);
}

export async function deleteNotification(id) {
  const db = await dbPromise;
  await db.run('DELETE FROM notifications WHERE id = ?', [id]);
}
