/*
  Warnings:

  - Made the column `fechaLimite` on table `Notificacion` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notificacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fechaLimite" DATETIME NOT NULL
);
INSERT INTO "new_Notificacion" ("fechaLimite", "id", "mensaje", "titulo") SELECT "fechaLimite", "id", "mensaje", "titulo" FROM "Notificacion";
DROP TABLE "Notificacion";
ALTER TABLE "new_Notificacion" RENAME TO "Notificacion";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
