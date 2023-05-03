import NotificationInterface from "../models/notification";

export default interface AdminAccountType {
  photo: string;
  first_name: string;
  last_name: string;
  name: string;
  aid: string;
  email: string;
  phone: string;
  birthdate: string;
  notifications: {
    notification: NotificationInterface;
    readAt?: Date;
  }[];
}
