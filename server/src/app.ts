import express from "express";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Request, Response } from "express";
import userRoute from "./routes/UserRoutes";
import auctionRoute from "./routes/AuctionRoutes";
import galleryRoute from "./routes/GalleryRoutes";
import vehicleRoute from "./routes/VehicleRoutes";

let cors = require('cors')
const prisma = new PrismaClient();
export const app = express();

app.use(cors())
app.use(express.json());

app.use("/users", userRoute);
app.use("/auction", auctionRoute);
app.use("/gallery", galleryRoute);
app.use("/vehicle", vehicleRoute);

app.listen(3000);
