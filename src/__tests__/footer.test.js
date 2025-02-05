import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../pages/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

test("check props value", () => {
  render(
    <BrowserRouter>
      <Footer email="mukul.dhabale@gmail.com" phone="259936">
        <FontAwesomeIcon icon={faCopyright} />
      </Footer>
    </BrowserRouter>
  );
  const getElement = screen.getByTestId("footer");
  const currYear = new Date().getFullYear();
  expect(getElement.textContent).toBe(
    `© ${currYear} Mukul's App - All Rights Reserved`
  );
});
