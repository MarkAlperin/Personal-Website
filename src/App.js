import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FrontPage from "./components/displays/FrontPage";
import Resume from "./components/Resume";

const App = () => {
  return (
    <FrontPage />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<FrontPage />} />
    //     <Route path="/resume" element={<Resume />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
