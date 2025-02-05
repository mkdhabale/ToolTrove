import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { Spinner } from "react-bootstrap";
import "../../styles/loading.css";

function AuthPage({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="loading-container">
        <Spinner animation="border" variant="primary" />
        <p>Loading...</p>
      </div>
    );
    
  if (user) return children;

  return <Navigate to={"/auth/log-in"} />;
}

export default AuthPage;
