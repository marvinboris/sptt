export default interface NotificationInterface {
  id?: string;
  type: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}
