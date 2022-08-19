import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContextProvider } from "./context/appContext";
import FrontPage from "./components/displays/FrontPage";
// import Fallback from "./components/Fallback";
const TennisTime = React.lazy(() => import("./apps/tennisTime/TennisTime"));
const ResPage = React.lazy(() => import("./apps/tennisTime/ResPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppContextProvider>
              <FrontPage />
            </AppContextProvider>
          }
        />
        <Route
          path="/tennis-time"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TennisTime />
            </Suspense>
          }
        />
        <Route path="/tennis-time/reservations"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ResPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
