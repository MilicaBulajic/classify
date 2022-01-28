import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import UserContext from "../context/UserContext";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  const { auth } = useContext(UserContext);

  //If there is Auth(ternary statement) load separate auth component that includes Login, signup, landing.
  // OR have auth ternary statement render in each route
  return (
      <>{auth ? <PrivateRoutes /> : <PublicRoutes />}</>
  );
};

export default Routes;
