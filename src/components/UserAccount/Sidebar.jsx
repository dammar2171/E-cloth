import { FaCircleUser } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../store/Context";
const Sidebar = () => {
  const { logout, authenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/account");
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="user-icon">
          <span>
            <FaCircleUser className="user" />
          </span>
          <p>
            <RiLogoutBoxFill />
            <a onClick={handleLogout}>{authenticated ? "Log Out" : "Log In"}</a>
          </p>
        </li>
        <li>
          <FaRegUser />
          <NavLink to="/userdashboard">Dashboard</NavLink>
        </li>
        <li>
          <FaCheckCircle />
          <a href="#">Track Order</a>
        </li>
        <li>
          <FaAddressCard />
          <a href="#">Addresses</a>
        </li>
        <li>
          <FaLock />
          <NavLink to="/accountdetail">Account Detail</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
