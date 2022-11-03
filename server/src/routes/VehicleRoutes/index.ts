const express = require("express");
const vehicleRoute = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

vehicleRoute.get("", async (req: any, res: any) => {
  const vehicles = await prisma.vehicle.findMany();

  res.json(vehicles);
});

vehicleRoute.post("", async (req: any, res: any) => {
  const inf = await prisma.vehicle.create({
    data: { ...req.body },
  });
  res.json(inf);
});
/* 
    import { Express } from 'express'
    
    export const appRoutes = (app: Express) => {
    
    }     */

export default vehicleRoute;
