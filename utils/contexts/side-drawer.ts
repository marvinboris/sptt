import React from "react";

type Type = boolean;

const SideDrawerContext = React.createContext<{
  open: Type;
  setOpen: React.Dispatch<React.SetStateAction<Type>>;
}>({
  open: false,
  setOpen: () => {},
});

export const useSideDrawerContext = () => React.useContext(SideDrawerContext);

export default SideDrawerContext;
