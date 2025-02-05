import { loginFormElements } from "../../config/FormElements/LogIn";
import CommonForm from "../../components/common-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/centered-style.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context";

function LoginComponent() {
  const navigate = useNavigate();
  const {
    loginFormData,
    setLoginFormData,
    loginWithFirebase,
    setLoading,
    initialLogInFormData,
    isAuthenticated,
  } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
      return null;
    }
  }, [navigate, isAuthenticated]);

  function onHandleSubmit(event) {
    event.preventDefault();
    //api logic & database logic
    loginWithFirebase()
      .then((result) => {
        if (result) {
          setLoginFormData(initialLogInFormData);
          // Show the success toast message
          toast.success(
            `Welcome back, ${loginFormData.email}! You are logged in successfully.`,
            {
              autoClose: 3000, // Set autoClose to 2 seconds (this can be adjusted)
            }
          );
          navigate("/user-form"); // Navigate to login after the toast
        }
        setLoading(false);
      })
      .catch((error) => {
        let errMsg = "";
        // Handle Firebase error and set error message
        if (error.code === "auth/invalid-email") {
          errMsg = "Invalid email format. Please check your email.";
        } else if (error.code === "auth/user-not-found") {
          errMsg = "No account found with this email.";
        } else if (error.code === "auth/wrong-password") {
          errMsg = "Incorrect password. Please try again.";
        } else {
          errMsg = "Incorrect email or password. Please try again."; //An unexpected error occurred. Please try again later.;
        }
        toast.error(errMsg, {
          autoClose: 3000,
        });
        setLoading(false);
      });
  }

  function onClearForm(event) {
    event.preventDefault();
    setLoginFormData(initialLogInFormData);
  }

  return (
    <div className="row-center">
      <div className="col-center">
        <ToastContainer />
        <h1>Login</h1>
        <CommonForm
          formData={loginFormData}
          setFormData={setLoginFormData}
          formControls={loginFormElements}
          buttonText={"Login"}
          onHandleSubmit={onHandleSubmit}
          onClearForm={onClearForm}
        />
        <p>
          Don't have account?{" "}
          <Link to="/auth/register" className="feature-button">
            Click here
          </Link>{" "}
          to register.
        </p>
      </div>
    </div>
  );
}

export default LoginComponent;
