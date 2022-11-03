import { api } from "../../services";
import { createContext, ReactNode, useState } from "react";

export interface IVehicle {
    id: string;
    photo: string;
    name: string;
    description: string;
    years: number;
    km: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    is_active: boolean;
    user_id: string;
}

interface IVehicleProps {
  children: ReactNode;
}

interface VehicleProviderData {
    vehicles: IVehicle[];
  createVehicle: (Vehicle: IVehicle) => void;
  listVehicle: (Vehicle: IVehicle) => void;
  updateVehicle: (Vehicle: IVehicle) => void;
  deleteVehicle: (Vehicle: IVehicle) => void;
}

const VehicleContext = createContext<VehicleProviderData>({} as VehicleProviderData);

const VehicleProvider = ({ children }: IVehicleProps) => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  const listVehicle = () => {
    api.get("vehicle/").then((response) => {
        setVehicles(response.data);
    });
  };

  const createVehicle = () => {};

  const updateVehicle = () => {};

  const deleteVehicle = () => {};

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        listVehicle,
        createVehicle,
        updateVehicle,
        deleteVehicle,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;
