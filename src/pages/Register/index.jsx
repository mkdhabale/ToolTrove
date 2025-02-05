import CommonForm from "../../components/common-form";
import { registerFormElements } from "../../config/FormElements/LogIn";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/centered-style.css";
import { AuthContext } from "../../context";
import { useContext, useEffect } from "react";

function RegisterComponent() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
      return null;
    }
  }, [navigate, isAuthenticated]);

  const {
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    setLoading,
    initialRegisterFormData,
    SetUserInFirebase,
  } = useContext(AuthContext);

  function handleRegisterOnSubmit(event) {
    event.preventDefault();
    const { email, name } = registerFormData;
    registerWithFirebase()
      .then((result) => {
        SetUserInFirebase(result.user.uid, name, email);
        setRegisterFormData(initialRegisterFormData);
        // Show the success toast message
        toast.success("You have been registered successfully! Please log in.", {
          autoClose: 3000, // Set autoClose to 2 seconds (this can be adjusted)
        });
        navigate("/auth/log-in"); // Navigate to login after the toast
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error registerWithFirebase: ", error);
        toast.error("An unexpected error occurred. Please try again later.", {
          autoClose: 3000, // Set autoClose to 2 seconds (this can be adjusted)
        });
        setLoading(false);
      });
  }

  function onClearForm(event) {
    event.preventDefault();
    setRegisterFormData(initialRegisterFormData);
  }

  return (
    <div className="row-center">
      <div className="col-center">
        <ToastContainer />
        <p>
          Already have an account?{" "}
          <Link to="/auth/log-in" className="feature-button">
            Click here
          </Link>{" "}
          to log in.
        </p>

        <h1>Register</h1>

        <CommonForm
          formControls={registerFormElements}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          buttonText={"Register"}
          onHandleSubmit={handleRegisterOnSubmit}
          onClearForm={onClearForm}
        />
      </div>
    </div>
  );
}

export default RegisterComponent;
