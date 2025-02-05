import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/About/AboutUs";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

test("check AboutUs props value", () => {
  let name = "Mukul Dhabale";
  let obj1 = {
    name: name,
    age: 30,
  };
  let dispalyData = () => {
    NotificationManager.success("Mukul Dhabale", "Author");
    NotificationManager.info("Password Generator");
    NotificationManager.warning("Weather", "", 5000);
    NotificationManager.error("Shopping", "", 5000, () => {
      //alert('callback');
    });
    NotificationManager.warning("Blog", "", 5000);
  };
  render(
    <BrowserRouter>
      <NotificationContainer />
      <AboutUs email="mukul.dhabale@gmail.com" phone="259936" obj={obj1}>
        <Button variant="primary" onClick={dispalyData}>
          <FontAwesomeIcon icon={faInfo} />
        </Button>
      </AboutUs>
    </BrowserRouter>
  );
  const getElement = screen.getByTestId("name-about");
  expect(getElement.textContent).toBe(`Owner: ${name}`);
});
