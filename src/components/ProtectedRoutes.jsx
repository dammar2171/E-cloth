import { useContext } from "react";
import { AppContext } from "../store/Context";
import { useNavigate } from "react-router";
const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { authenticated } = useContext(AppContext);
  console.log(authenticated);

  if (!authenticated) {
    return navigate("/account");
  }
  return children;
};
export default ProtectedRoutes;
