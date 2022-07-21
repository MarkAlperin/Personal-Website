import React, { useState } from "react";

const AppContext = React.createContext({
  darkMode: true,
  setDarkMode: () => {},
  showMenu: false,
  setShowMenu: () => {},
});

export const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);
  const [showMenu, setShowMenu] = useState(false);


  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        showMenu,
        setShowMenu,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;