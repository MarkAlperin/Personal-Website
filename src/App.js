import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FrontPage from "./components/displays/FrontPage";
import { AppContextProvider } from "./context/appContext";

const App = () => {
  return (
    <AppContextProvider>
      <FrontPage />
    </AppContextProvider>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<FrontPage />} />
    //     <Route path="/resume" element={<Resume />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
