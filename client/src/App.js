import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider as UserProvider } from "./context/UserContext";
import AllRoutes from "./components/AllRoutes";

const App = () => {

  return (
    <UserProvider>
      <Router>
        <AllRoutes />
      </Router>
    </UserProvider>
  );
};

export default App;
