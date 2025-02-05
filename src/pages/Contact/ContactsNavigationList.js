import React from "react";
import "../../styles/contact-navigation.css";
import { dummyContacts } from "../../data/DummyContacts";
import { NavLink } from "react-router-dom"; // Importing Link from react-router-dom

export default function ContactsNavigationList() {
  let dp = dummyContacts.map((v, i) => {
    return (
      //<li key={v.id}><Link to={`/contact-page/${v.id}`} > {v.title}</Link></li>
      <li key={v.id}>
        <NavLink
          to={`/contact-page/${v.id}`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {v.title}
        </NavLink>
      </li>
    );
  });
  return (
    <div className="contactdv">
      <nav>
        <ul>{dp}</ul>
      </nav>
    </div>
  );
}
