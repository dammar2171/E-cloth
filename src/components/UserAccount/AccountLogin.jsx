import "../../css/UserAccount.css";
const AccountLogin = () => {
  return (
    <form>
      <h2>Login</h2>
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
      <button type="submit" className="loginBtn">Login</button>
    </form>
  );
};
export default AccountLogin;
