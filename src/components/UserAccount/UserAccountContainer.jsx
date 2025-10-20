import Sidebar from "../../components/UserAccount/Sidebar.jsx";
import AccountLogin from "./AccountLogin.jsx";
import CheckoutForm from "../CheckoutForm.jsx";
import "../../css/UserAccount.css";
const UserAccountContainer = () => {
  return (
    <div className="user-account-container container-fluid py-4">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <Sidebar />
              </div>
              <div className="col-6">
                <AccountLogin />
                <span className="privacy-policy-text">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <a href="#">privacy policy</a>.
                  </p>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96718.63651959518!2d80.14309644699101!3d28.969663263084257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1a58cb6a856ef%3A0x8e8597bbf6be43f6!2sShree%20Araniko%20Secondary%20School!5e1!3m2!1sen!2snp!4v1760950895357!5m2!1sen!2snp"
                  width="100%"
                  height={420}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserAccountContainer;
