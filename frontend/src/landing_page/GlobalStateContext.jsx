import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();
export const GlobalStateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
