import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Context as UserContext } from "../context/UserContext";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  const { state } = useContext(UserContext);
  const { auth, token, email, userid } = state;

  //If there is Auth(ternary statement) load separate auth component that includes Login, signup, landing.
  // OR have auth ternary statement render in each route
  return (
    <BrowserRouter>
      <Switch>{auth ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
    </BrowserRouter>
  );
};

export default Routes;
