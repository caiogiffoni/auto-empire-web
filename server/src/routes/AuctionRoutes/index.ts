const express = require("express");
const auctionRoute = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

auctionRoute.get("", async (req: any, res: any) => {
  const auctions = await prisma.auction.findMany();
  res.json(auctions);
});

auctionRoute.post("", async (req: any, res: any) => {
  const inf = await prisma.auction.create({
    data: { ...req.body },
  });
  res.json(inf);
});
/* 
    import { Express } from 'express'
    
    export const appRoutes = (app: Express) => {
    
    }     */

export default auctionRoute;
