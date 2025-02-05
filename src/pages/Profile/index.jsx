import React from "react";
import "../../styles/user-profile.css";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  const { user, handleLogout, setLoading } = useContext(AuthContext);
  return (
    <div className="user-profile">
      <p className="user-email">{user?.email}</p>
      <button className="logout-btn" onClick={onHandleLogOut}>
        Logout
      </button>
    </div>
  );

  function onHandleLogOut(event) {
    event.preventDefault();

    handleLogout()
      .then((result) => {
        setLoading(false);
        toast.success(`You are logged out successfully.`, {
          autoClose: 3000, // Set autoClose to 2 seconds (this can be adjusted)
        });
        navigate("/auth/log-in");
      })
      .catch((error) => {
        console.error("Error onHandleLogOut: ", error);
        toast.error("An unexpected error occurred. Please try again later.", {
          autoClose: 3000, // Set autoClose to 2 seconds (this can be adjusted)
        });
        setLoading(false);
      });
  }
}
