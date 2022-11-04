import express from "express";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Request, Response } from "express";
import userRoute from "./routes/UserRoutes";
import auctionRoute from "./routes/AuctionRoutes";
import galleryRoute from "./routes/GalleryRoutes";
import vehicleRoute from "./routes/VehicleRoutes";
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/auction", auctionRoute);
app.use("/gallery", galleryRoute);
app.use("/vehicle", vehicleRoute);

app.listen(3000);
