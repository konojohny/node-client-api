/*
  Warnings:

  - You are about to drop the column `dataNasci` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Clients` table. All the data in the column will be lost.
  - Added the required column `dateBirth` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clients" DROP COLUMN "dataNasci",
DROP COLUMN "nome",
ADD COLUMN     "dateBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
