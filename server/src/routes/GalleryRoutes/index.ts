const express = require("express");
const galleryRoute = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

galleryRoute.get("", async (req: any, res: any) => {
  const gallery = await prisma.gallery.findMany();
  res.json(gallery);
});

galleryRoute.post("", async (req: any, res: any) => {
  const inf = await prisma.gallery.create({
    data: { ...req.body },
  });
  res.json(inf);
});
/* 
    import { Express } from 'express'
    
    export const appRoutes = (app: Express) => {
    
    }     */

export default galleryRoute;
