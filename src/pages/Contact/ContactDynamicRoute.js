import React from "react";
import { useParams } from "react-router-dom";
import { dummyContacts } from "../../data/DummyContacts";
import ContactComponent from "./ContactComponent";
import ContactsNavigationList from "./ContactsNavigationList";
import "../../styles/centered-style.css";

const ContactPage = () => {
  const { id } = useParams(); // Accessing the dynamic part of the URL

  const contactFiltered = dummyContacts.filter((p) => p.id === parseInt(id));
  return (
    <div>
      <ContactsNavigationList />
      <div className="row-center">
        <div className="col-center">
          {<ContactComponent props={contactFiltered[0]} />}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
