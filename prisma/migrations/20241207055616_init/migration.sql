-- CreateTable
CREATE TABLE "Notificacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fechaLimite" DATETIME
);

-- CreateTable
CREATE TABLE "Mercaderia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "marca" TEXT NOT NULL,
    "stockDisponible" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Mayorista" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "pagina_web" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL
);
