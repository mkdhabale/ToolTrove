import React from "react";
import AboutUs from "./AboutUs";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const About = () => {
  let dispalyData = () => {
    NotificationManager.success("Mukul Dhabale", "Author");
    NotificationManager.info("Password Generator");
    NotificationManager.warning("Weather", "", 5000);
    NotificationManager.error("Shopping", "", 5000, () => {
      //alert('callback');
    });
    NotificationManager.warning("Blog", "", 5000);
  };

  let obj1 = {
    name: "Mukul Dhabale",
    age: 30,
  };

  return (
    <div>
      <NotificationContainer />
      <AboutUs email="mukul.dhabale@gmail.com" phone="259936" obj={obj1}>
        <Button variant="primary" onClick={dispalyData}>
          <FontAwesomeIcon icon={faInfo} />
        </Button>
      </AboutUs>
      <div className="container">
        <CardB />
      </div>
    </div>
  );
};

export default About;

function CardB() {
  return <div className="text-danger">Reach out to us for more detail.</div>;
}
