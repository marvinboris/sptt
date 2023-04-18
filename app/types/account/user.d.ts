import NotificationInterface from "../models/notification";
import RoleInterface from "../models/role";

export default interface UserAccountType {
  photo: string;
  first_name: string;
  last_name: string;
  name: string;
  aid: string;
  email: string;
  phone: string;
  birthdate: string;
  role: RoleInterface;
  notifications: {
    notification: NotificationInterface;
    readAt?: Date;
  }[];
}
