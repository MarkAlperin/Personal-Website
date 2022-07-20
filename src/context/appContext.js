import React, { useState } from "react";

const AppContext = React.createContext({
  darkMode: true,
  setDarkMode: () => {},
  // width: 0,
  // setWidth: () => {},
});

export const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);
  // const [width, setWidth] = useState();
  // const [height, setHeight] = useState((window.innerHeight > 0) ? window.innerHeight : screen.height);

  // let w = (window.innerWidth > 0) ? window.innerWidth : screen.width

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

export default AppContext;