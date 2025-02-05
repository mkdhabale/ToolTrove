import React from "react";
import "../../styles/error404.css"; // Import the CSS for the styles

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Oops!</h1>
        <h2 className="error-subheading">404 - Page Not Found</h2>
        <p className="error-message">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a href="/" className="error-link">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default Error404;
