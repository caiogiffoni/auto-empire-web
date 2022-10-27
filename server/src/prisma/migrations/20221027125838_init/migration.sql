/*
  Warnings:

  - You are about to drop the `Galery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Galery" DROP CONSTRAINT "Galery_vehicle_id_fkey";

-- DropTable
DROP TABLE "Galery";

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "vehicle_id" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
