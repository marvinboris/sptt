import { createContext, useContext } from "react";

import UserAccountType from "../types/account/user";
import RoleInterface from "../types/models/role";

type Type = UserAccountType;

const AccountContext = createContext<{
  account: Type;
  setAccount: (account: Type) => void;
}>({
  account: {
    photo: 'string',
    first_name: 'string',
    last_name: 'string',
    name: 'string',
    aid: 'string',
    email: 'string',
    phone: 'string',
    birthdate: 'string',
    role: {
      name: '',
      description: '',
      features: [],
    },
    notifications: [],
  },
  setAccount: () => {},
});

export const useAccountContext = () => useContext(AccountContext);

export default AccountContext;
