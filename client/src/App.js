import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserContext from "./context/UserContext";
import Routes from "./components/Routes";

const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);
  const context = { auth, setAuth, userId, setUserId, email, setEmail };
  return (
    <UserContext.Provider value={context}>
        <Routes />
    </UserContext.Provider>
  );
};

export default App;
