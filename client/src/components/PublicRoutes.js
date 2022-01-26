import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default PublicRoutes;
