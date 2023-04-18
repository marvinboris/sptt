import FeatureInterface from "./feature";

export default interface RoleInterface {
  id?: string;
  name: string;
  description: string;
  features: { prefix: string; access: string[] }[];
  createdAt?: Date;
  updatedAt?: Date;
}
