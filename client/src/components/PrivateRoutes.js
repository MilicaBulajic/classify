import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import OnboardPage from "./pages/OnboardPage";
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