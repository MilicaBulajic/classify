import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";


const PublicRoutes = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={LoginPage} />
            </Routes> 
        </Router> 
        </>
    );
};

export default PublicRoutes;