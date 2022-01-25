import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasboard from "./pages/Dasboard";


const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={Dasboard} />
            </Routes> 
        </BrowserRouter> 
    )
};

export default PrivateRoutes;