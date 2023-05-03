import { createContext, useContext } from "react";

import UserAccountType from "../types/account/user";
import AdminAccountType from "../types/account/admin";

type Type = UserAccountType | AdminAccountType;

const AccountContext = createContext<{
  account: Type;
  setAccount: (account: Type) => void;
}>({
  account: {
    photo: "/images/user-pic.svg",
    first_name: "Merani",
    last_name: "Carto",
    name: "Merani Carto",
    aid: "string",
    email: "merani.carto@gmail.com",
    phone: "555 555 555",
    birthdate: "01/01/1991",
    notifications: [
      {
        notification: {
          id: "1",
          type: "Test",
          message: "This is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
    ],
  },
  setAccount: () => {},
});

export const useAccountContext = () => useContext(AccountContext);

export default AccountContext;
