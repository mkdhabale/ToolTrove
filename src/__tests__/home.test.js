import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/Home/Home";
import { BrowserRouter } from "react-router-dom";

test("render Welcome to the Mukul's App text", () => {
  // Wrap the Home component in a BrowserRouter to provide router context
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const checkHelloWorldText = screen.getByText("Welcome to the Mukul's App");

  expect(checkHelloWorldText).toBeInTheDocument();
});

test("check head-descr by test id", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const getElement = screen.getByTestId("head-descr");

  expect(getElement.textContent).toBe(
    "Your all-in-one tool for managing users, generating secure passwords, checking the latest weather updates, shopping, and social blogging."
  );

  expect(screen.queryByText("Loading data...")).not.toBeInTheDocument();
});
