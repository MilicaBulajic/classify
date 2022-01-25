import React, { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Provider as UserProvider } from "./context/UserContext";

const App = () => {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
