const express = require("express");
const userRoute = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

userRoute.get("", async (req: any, res: any) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

userRoute.post("", async (req: any, res: any) => {
  const inf = await prisma.user.create({
    data: { ...req.body },
  });
  res.json(inf);
});
/* 
    import { Express } from 'express'
    
    export const appRoutes = (app: Express) => {
    
    }     */

export default userRoute;
