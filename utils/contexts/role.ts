import { createContext, useContext } from "react";

type Type = 'user' | 'admin';

const RoleContext = createContext<{
  role: Type;
  setRole: (role: Type) => void;
}>({
  role: 'user',
  setRole: () => {},
});

export const useRoleContext = () => useContext(RoleContext);

export default RoleContext;
