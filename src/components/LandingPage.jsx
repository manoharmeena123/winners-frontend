import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import Header from "./Header";

const LandingPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const firstName = JSON.parse(localStorage.getItem("firstName"));
    console.log("first", firstName);
    if (firstName) {
      setUser({ name: firstName });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="landing-container">
      {/* Always render the Header at the top */}
      <Header />

      {/* Main content */}
      <div className="landing-content">
        {user ? (
          <div>
            <p>Hello, {user.name}!</p>
            <button className="btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login">
              <button className="btn login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn signup-btn">Signup</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
