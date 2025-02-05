import React, { useState } from "react";
import "../../styles/password-generator.css"; // Custom styles
import "../../styles/centered-style.css";

export default function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?/~";

  const generatePassword = () => {
    let characters = "";

    if (includeUpperCase) characters += upperCaseChars;
    if (includeLowerCase) characters += lowerCaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSpecialChars) characters += specialChars;

    if (characters === "") {
      setGeneratedPassword("Please select at least one character type.");
      return;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
    setCopyMessage(""); // Clear previous message
  };

  // Copy password to clipboard using the native Clipboard API
  const handleCopy = () => {
    if (generatedPassword) {
      navigator.clipboard
        .writeText(generatedPassword)
        .then(() => {
          setCopyMessage("Password copied to clipboard!");
        })
        .catch(() => {
          setCopyMessage("Failed to copy password.");
        });
    }
  };

  return (
    <div className="row-center AppPasswordGeneratorDv">
      <div className="col-center">
        <div className="AppPasswordGenerator">
          <div className="password-generator-container">
            <h1>Password Generator</h1>

            <div className="settings">
              <label>Password Length:</label>
              <input
                type="number"
                value={passwordLength}
                min="5"
                max="10"
                onChange={(e) => setPasswordLength(Number(e.target.value))}
              />

              <label>
                <input
                  type="checkbox"
                  checked={includeUpperCase}
                  onChange={(e) => setIncludeUpperCase(e.target.checked)}
                />
                Uppercase Letters
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={includeLowerCase}
                  onChange={(e) => setIncludeLowerCase(e.target.checked)}
                />
                Lowercase Letters
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
                Numbers
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={includeSpecialChars}
                  onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                />
                Special Characters
              </label>

              <button className="generate-btn" onClick={generatePassword}>
                Generate Password
              </button>
            </div>

            {generatedPassword && (
              <div className="password-result">
                <input
                  type="text"
                  value={generatedPassword}
                  readOnly
                  className="password-field"
                />
                <button className="copy-btn" onClick={handleCopy}>
                  Copy
                </button>
                {copyMessage && <p className="copy-message">{copyMessage}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
