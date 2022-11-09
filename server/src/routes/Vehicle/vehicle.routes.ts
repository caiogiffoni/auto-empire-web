import Router from "express";
import VehicleController from "../../controllers/vehicle/vehicle.controller";

const vehicleRoutes = Router();
const vehicleController = new VehicleController();

vehicleRoutes.get("/:vehicleId", vehicleController.readOneVehicle);

export default vehicleRoutes;
