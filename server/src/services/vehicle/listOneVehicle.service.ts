import { prisma } from "../../data-source";
import { IVehicle } from "../../entities/vehicle";
import { AppError } from "../../errors/appError";

const listOneVehicleService = async (vehicleId: string): Promise<IVehicle> => {
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: vehicleId },
  });

  if (!vehicle) throw new AppError(404, "Vehicle not found");

  return vehicle;
};

export default listOneVehicleService;
