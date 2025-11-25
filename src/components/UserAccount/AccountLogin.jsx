import { useContext, useRef } from "react";
import "../../css/UserAccount.css";
import { AppContext } from "../../store/Context";
import { useNavigate } from "react-router";
const AccountLogin = () => {
  const navigate = useNavigate();
  const { setLoginData, authenticated } = useContext(AppContext);
  const emailElement = useRef();
  const passwordElement = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = emailElement.current.value;
    const password = passwordElement.current.value;
    setLoginData({ email, password });
    emailElement.current.value = "";
    passwordElement.current.value = "";
    if (authenticated) {
      navigate("/userdashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <h2>Login</h2>
      <div className="mb-1">
        <label htmlFor="email" className="form-label">
          Email <span>*</span>
        </label>
        <input
          type="email"
          ref={emailElement}
          required
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="password" className="form-label">
          Password <span>*</span>
        </label>
        <input
          type="password"
          required
          ref={passwordElement}
          className="form-control"
          id="password"
          aria-describedby="passwordHelp"
        />
      </div>
      <button type="submit" className="loginBtn">
        Login
      </button>
    </form>
  );
};
export default AccountLogin;
