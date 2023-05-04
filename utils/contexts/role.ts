import { createContext, useContext } from "react";

type Type = 'user' | 'admin' | 'customer';

const RoleContext = createContext<{
  role: Type;
  setRole: (role: Type) => void;
}>({
  role: 'admin',
  setRole: () => {},
});

export const useRoleContext = () => useContext(RoleContext);

export default RoleContext;
