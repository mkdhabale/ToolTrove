import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../config/FirebaseAuth/firebaseConfig";
//import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../styles/loading.css";

export const AuthContext = createContext(null);
const initialRegisterFormData = {
  name: "",
  email: "",
  password: "",
};
const initialLogInFormData = {
  email: "",
  password: "",
};

export default function AuthState({ children }) {
  const [registerFormData, setRegisterFormData] = useState({
    initialRegisterFormData,
  });
  const [loginFormData, setLoginFormData] = useState({
    initialLogInFormData,
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //const navigate = useNavigate();

  // Function to set the user data in Firestore
  //not working
  function SetUserInFirebase(uid, name, email) {
    try {
      // Create or update the user document in Firestore
      setDoc(doc(db, "users", uid), {
        displayName: name,
        username: name,
        email: email,
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  function registerWithFirebase() {
    setLoading(true);
    const { email, password } = registerFormData;
    // Create user with email and password
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginWithFirebase() {
    setLoading(true);
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleLogout() {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => {
      checkAuthState();
    };
  }, []);

  useEffect(() => {
    if (user) {
    } //navigate("/form");}
  }, [user]);

  if (loading)
    return (
      <div className="loading-container">
        <Spinner animation="border" variant="primary" />
        <p>Loading...</p>
      </div>
    );

  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        loading,
        user,
        loginFormData,
        setLoginFormData,
        loginWithFirebase,
        handleLogout,
        setUser,
        setLoading,
        isAuthenticated,
        SetUserInFirebase,
        initialLogInFormData,
        initialRegisterFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
