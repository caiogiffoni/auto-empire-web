export interface IVehicle {
  id: string;
  photo: string;
  name: string;
  description: string;
  year: number;
  price: number;
  km: number;
  createdAt: Date;
  updatedAt: Date;
  is_active: Boolean;
  user_id: string;
}
