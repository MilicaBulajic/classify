import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Onboard from "./pages/Onboard";
import HomePage from "./pages/HomePage";


const PrivateRoutes = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/*"
              render={() => {
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </BrowserRouter>
      );
    };
export default PrivateRoutes;