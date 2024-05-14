import { createContext, useContext, useState } from "react";

const navigationContext = createContext();

export const useNavigationContext = () => {
  return useContext(navigationContext);
};

export const NavigationProvider = ({ children }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [oldPageIndex, setOldPageIndex] = useState(0);

  return (
    <navigationContext.Provider
      value={{ pageIndex, setPageIndex, oldPageIndex, setOldPageIndex }}
    >
      {children}
    </navigationContext.Provider>
  );
};
