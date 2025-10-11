import style from "../css/Footer.module.css";
import logo from "../assets/eClothLogo.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { PiTiktokLogoThin } from "react-icons/pi";
const MainFooter = () => {
  return (
    <footer className="container-fluid py-5 shadow-lg">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={logo} alt="logo" width={100} />
            <p>Best clothing web store in nepal </p>
            <div className={`${style.contactResource}`}>
              <span>
                <IoLocationOutline /> Bhamka 03, kanchanpur Nepal
              </span>
              <span>
                <MdOutlinePhoneInTalk /> 9805752792, 9843314950
              </span>
              <span>
                <MdOutlineMailOutline /> dammarbhatt111@gmail.com
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className={`${style.linkGroup}`}>
              <h6>Quick Links</h6>
              <a href="#">Home</a>
              <a href="#">Top</a>
              <a href="#">Bottom</a>
              <a href="#">Shoes</a>
              <a href="#">Sale</a>
            </div>
          </div>
          <div className="col-4 ">
            <div className={`${style.linkGroup}`}>
              <h6>Social Media</h6>
              <a href="#">
                <FiFacebook /> Facebook{" "}
              </a>
              <a href="#">
                <PiWhatsappLogoThin /> Whatsapp
              </a>
              <a href="#">
                <CiTwitter /> Twitter
              </a>
              <a href="#">
                <PiTiktokLogoThin /> Tiktok
              </a>
              <a href="#">
                <CiInstagram />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default MainFooter;
