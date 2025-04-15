import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../styles/NotFound.css";
import PageTitle from "./PageTitle";

const NotFound = () => {
  return (
    <div className="not-found">
      <PageTitle title="404 - Page Not Found" />
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
