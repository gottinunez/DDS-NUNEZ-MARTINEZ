/*
  Warnings:

  - You are about to drop the column `fechaLimite` on the `Notificacion` table. All the data in the column will be lost.
  - Added the required column `scheduledAt` to the `Notificacion` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notificacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "scheduledAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isSent" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Notificacion" ("id", "mensaje", "titulo") SELECT "id", "mensaje", "titulo" FROM "Notificacion";
DROP TABLE "Notificacion";
ALTER TABLE "new_Notificacion" RENAME TO "Notificacion";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
