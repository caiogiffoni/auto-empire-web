/*
  Warnings:

  - You are about to drop the column `yeasr` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `years` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "yeasr",
ADD COLUMN     "years" INTEGER NOT NULL;
