import { useContext } from "react";
import { AppContext } from "../store/Context";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { authenticated } = useContext(AppContext);

  if (authenticated) {
    return children;
  }
  return <Navigate to="/account" replace />;
};

export default ProtectedRoutes;
