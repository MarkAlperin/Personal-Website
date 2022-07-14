import React, { useState } from "react";

export const AppContext = React.createContext({
  darkMode: true,
  setDarkMode: () => {},
});

export const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
