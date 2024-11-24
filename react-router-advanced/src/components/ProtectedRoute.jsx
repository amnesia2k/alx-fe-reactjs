import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Use the custom hook to check authentication status

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
