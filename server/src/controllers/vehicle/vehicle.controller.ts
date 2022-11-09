import { Request, Response } from "express";
import listOneVehicleService from "../../services/vehicle/listOneVehicle.service";

export default class VehicleController {
  async readOneVehicle(req: Request, res: Response) {
    const { vehicleId } = req.params;
    const vehicle = await listOneVehicleService(vehicleId);
    return res.status(200).json(vehicle);
  }
}
