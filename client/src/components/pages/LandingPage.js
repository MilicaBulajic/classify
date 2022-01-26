import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="landing-container">
        <div className="landing-nav-container">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
