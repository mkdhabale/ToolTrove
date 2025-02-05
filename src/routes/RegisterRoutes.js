import React from "react";
import { Outlet, useRoutes } from "react-router-dom"; // Importing necessary components
import About from "../pages/About/About";

import UserForm from "../pages/UserForm/UserForms";
import PasswordGenerator from "../pages/PasswordGenerator/PasswordGenerator";
import Weather from "../pages/Weather/Weather";
import ShoppingPage from "../pages/Shopping/ShoppingPage";
import Error404 from "../pages/Error/Error404";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ContactPage from "../pages/Contact/ContactDynamicRoute";
import LoginComponent from "../pages/Login";
import RegisterComponent from "../pages/Register";
import AuthPage from "../hooks/Auth";
import Profile from "../pages/Profile";
import ReduxCounter from "../pages/Blog/counter-example/Counter";
import BlogApp from "../pages/Blog/blog-app/BlogApp";
import NavigationRoute from "../navigation/NavigationRoute";
import ZustandCounter from "../pages/Product/counter-example/Counter";
import Products from "../pages/Product/product";

export default function RegisterRoutes() {
  return (
    <>
      <NavigationRoute></NavigationRoute>
      <div>
        <CustomRoutes />
      </div>
    </>
  );
}

function CustomRoutes() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user-form",
      element: (
        <AuthPage>
          <UserForm />
        </AuthPage>
      ),
    },
    {
      path: "/password-generator",
      element: <PasswordGenerator />,
    },
    {
      path: "/weather",
      element: <Weather />,
    },
    {
      path: "/shopping",
      element: <ShoppingPage />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/zustand-counter",
      element: <ZustandCounter />,
    },
    {
      path: "/redux-counter",
      element: <ReduxCounter />,
    },
    {
      path: "/blog",
      element: (
        <AuthPage>
          <BlogApp />
        </AuthPage>
      ),
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/cont/contact",
      element: <Contact />,
    },
    {
      path: "/contact-page/:id",
      element: <ContactPage />,
    },
    {
      path: "/auth", // Parent route for authentication-related pages
      element: (
        <div>
          {/* <h2>Authentication</h2> */}
          <Outlet /> {/* Render the child routes here */}
        </div>
      ), // Placeholder for Auth parent, you can customize this component
      children: [
        {
          path: "log-in", // Child route for login
          element: <LoginComponent />,
        },
        {
          path: "register", // Child route for register
          element: <RegisterComponent />,
        },
      ],
    },
    {
      path: "/profile",
      element: (
        <AuthPage>
          <Profile />
        </AuthPage>
      ),
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ];

  return useRoutes(routes);
}
