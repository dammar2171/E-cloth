import { Link } from "react-router";
import style from "../css/Checkout.module.css";
const Login = () => {
  
  return (
    <div className={`${style.checkoutCoupon} ${style.loginSection}`}>
      <p className={`d-inline-flex gap-1 `}>
        Returning customer?
        <a
          data-bs-toggle="collapse"
          href="#loginExample"
          role="button"
          aria-expanded="false"
          aria-controls="loginExample"
        >
          Click here to login
        </a>
      </p>
      <div className="collapse" id="loginExample">
        <div className="login-container">
          <p>
            If you have shopped with us before, please enter your details below.
            If you are a new customer, please proceed to the Billing section.
          </p>
          <form>
            <div className="mb-1">
              <label htmlFor="email" className="form-label">
                Email <span>*</span>
              </label>
              <input
                type="email"
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
                className="form-control"
                id="password"
                aria-describedby="passwordHelp"
              />
            </div>
            <button type="submit" className={`${style.checkoutBtn} mt-3`}>
              Login
            </button>
          </form>
          <div className={`${style.forgotPassword}`}>
            <span>
              <input type="checkbox" /> Remember me
            </span>
            <Link to="/account">Forgot your password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
