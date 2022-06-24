import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FrontPage from "./components/FrontPage";
import Resume from "./components/Resume";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage />}>
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  </BrowserRouter>;
};

export default App;
