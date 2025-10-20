import { FaCircleUser } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="user-icon">
          <span>
            <FaCircleUser className="user"/>
          </span>
          <p>
            <RiLogoutBoxFill />
            <a href="#">Log Out</a>
          </p>
        </li>
        <li>
          <FaRegUser />
          <a href="#">Dashboard</a>
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
          <a href="#">Account Detail</a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
