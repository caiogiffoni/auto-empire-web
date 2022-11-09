/*
  Warnings:

  - You are about to drop the column `years` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `year` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "years",
ADD COLUMN     "year" INTEGER NOT NULL;
