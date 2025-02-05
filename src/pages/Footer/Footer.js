import React from "react";

export default function Footer({ email, phone, children }) {
  return (
    // <div> {new Date().getFullYear()} {children} All Rights Reserved {email} {phone} </div>
    <footer className="footer">
      <b>
        <p data-testid="footer">
          © {new Date().getFullYear()} Mukul's App - All Rights Reserved
        </p>
      </b>
    </footer>
  );
}
