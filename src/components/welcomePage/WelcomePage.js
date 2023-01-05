import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      this is a welcome page
      <Link to="login" className="btn btn-primary m-3">
        login
      </Link>
      <Link to="register" className="btn btn-primary m-3">
        register
      </Link>
    </div>
  );
}

export default WelcomePage;
