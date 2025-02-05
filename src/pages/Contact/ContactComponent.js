import React from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ContactComponent({ props }) {
  return (
    <Col
      style={{
        display: "grid", // Use grid layout
        justifyItems: "center", // Center content horizontally
        alignItems: "center", // Center content vertically
        height: "200px", // Set height for vertical centering visibility
      }}
    >
      <Card style={{ width: "18rem" }}>
        <FontAwesomeIcon icon={faUser} size="3x" color="purple" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
