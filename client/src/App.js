import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider as UserProvider } from "./context/UserContext";
import Routes from "./components/Routes";

const App = () => {

  return (
    <UserProvider>
        <Routes />
    </UserProvider>
  );
};

export default App;
