import React from "react";
import { dummyContacts } from "../../data/DummyContacts";
import { Row } from "react-bootstrap";
import ContactComponent from "./ContactComponent";
import ContactsNavigationList from "./ContactsNavigationList";

const Contact = () => {
  return (
    <div>
      <ContactsNavigationList />
      <div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {dummyContacts.map((v, i) => {
            return <ContactComponent props={v} key={i} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default Contact;
