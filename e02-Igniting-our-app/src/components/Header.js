import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About us </li>
          <li>contact us</li>
          <li>Log In</li>
          <li> Sign Up</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
