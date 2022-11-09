export interface IVehicle {
  id: string;
  photo: string;
  description: string;
  yeasr: number;
  km: number;
  createdAt: Date;
  updatedAt: Date;
  is_active: Boolean;
  user_id: string;
}
