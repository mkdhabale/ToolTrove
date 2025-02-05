import React from "react";
import "../../styles/about-us.css"; // Import the CSS file

const AboutUs = (props) => {
  const { name, age } = props.obj;
  const { email, phone, children } = props;

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div data-testid="name-about" className="info-item">
          <span className="label">Owner:</span> {name}
        </div>
        <div className="info-item">
          <span className="label">Contact Email:</span>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="info-item">
          <span className="label">Contact Mobile:</span>{" "}
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className="info-item">
          <span className="label">Age:</span> {age}
        </div>
        <div className="info-item">
          <span className="label">Services:</span> {children}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
