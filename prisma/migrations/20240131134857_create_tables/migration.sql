-- CreateTable
CREATE TABLE "animals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "adopted" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "types" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "animal_types" (
    "animalId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    PRIMARY KEY ("animalId", "typeId"),
    CONSTRAINT "animal_types_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animals" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "animal_types_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "animal_adoptions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "animalId" INTEGER NOT NULL,
    "listedById" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "animal_adoptions_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animals" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "animal_adoptions_listedById_fkey" FOREIGN KEY ("listedById") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
