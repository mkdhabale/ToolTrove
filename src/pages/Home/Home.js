import React from "react";
import { Link } from "react-router-dom"; // for navigation to other pages
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to the Mukul's App</h1>
        <p data-testid="head-descr">
          Your all-in-one tool for managing users, generating secure passwords,
          checking the latest weather updates, shopping, and social blogging.
        </p>
      </header>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="feature-card">
          <h2>Manage Users</h2>
          <p>
            Create, read, update, and delete users easily. This feature lets you
            manage your user data seamlessly.
          </p>
          <Link to="/form" className="feature-button">
            Go to User Management
          </Link>
        </div>

        <div className="feature-card">
          <h2>Password Generator</h2>
          <p>
            Generate strong, secure passwords with a single click, perfect for
            your accounts.
          </p>
          <Link to="/password-generator" className="feature-button">
            Go to Password Generator
          </Link>
        </div>

        <div className="feature-card">
          <h2>Weather Information</h2>
          <p>
            Get the current weather details for your city. Stay up-to-date with
            real-time weather updates.
          </p>
          <Link to="/weather" className="feature-button">
            Check Weather
          </Link>
        </div>

        <div className="feature-card">
          <h2>Shopping</h2>
          <p>
            Start shopping now and discover the highest-rated products in every
            category. Quality and satisfaction are just a click away!
          </p>
          <Link to="/shopping" className="feature-button">
            Go to Shopping
          </Link>
        </div>

        <div className="feature-card">
          <h2>Blog</h2>
          <p>
            Create, manage, and publish your own blogs with an easy-to-use
            interface. Share your thoughts and ideas.
          </p>
          <Link to="/shopping" className="feature-button">
            Go to Blog
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      {/* <footer className="footer">
        <p>© {new Date().getFullYear()} Web App - All Rights Reserved</p>
      </footer> */}
    </div>
  );
};

export default Home;
