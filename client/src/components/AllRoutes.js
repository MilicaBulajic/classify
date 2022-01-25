import React, { useContext } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Context as UserContext } from "../context/UserContext";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  const { state } = useContext(UserContext);
  const { auth, token, email, userid } = state;

  //If there is Auth(ternary statement) load separate auth component that includes Login, signup, landing.
  // OR have auth ternary statement render in each route
  return (
    <BrowserRouter>
      <Routes>{auth ? <PrivateRoutes /> : <PublicRoutes />}</Routes>
    </BrowserRouter>
  );
};

export default Routes;
