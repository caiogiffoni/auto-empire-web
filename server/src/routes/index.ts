import { Express } from "express";
import vehicleRoutes from "./Vehicle/vehicle.routes";

export const appRoutes = (app: Express) => {
  app.use("/vehicle", vehicleRoutes);
};
