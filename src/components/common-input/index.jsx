import { useState } from "react";
import { Form } from "react-bootstrap";
import "../../styles/password-input.css";

function CommonInput({
  label,
  onChange,
  type,
  name,
  id,
  value,
  placeholder,
  required,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Form.Group>
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <div
          className={`${type === "password" ? "password-input-container" : ""}`}
        >
          <Form.Control
            name={name}
            type={
              type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : type || "text"
            }
            id={id}
            placeholder={placeholder || "Enter value here"}
            value={value || ""}
            onChange={onChange}
            required={required === true ? true : false}
          />
          {type === "password" ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility
              className="show-password-btn"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          ) : (
            ""
          )}
        </div>
      </Form.Group>
    </div>
  );
}

export default CommonInput;
