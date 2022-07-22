import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import FrontPage from "./components/displays/FrontPage";
import { AppContextProvider } from "./context/appContext";


const App = () => {
  return (
    <AppContextProvider>
      <FrontPage />
    </AppContextProvider>
  );

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <AppContextProvider>
  //         <Route path="/" element={<FrontPage />} />
  //       </AppContextProvider>
  //       <Route path="/cradleMountain" element={<CradleMountainApp />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
};

export default App;
