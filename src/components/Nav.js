import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from "../imgs/logo.svg";
import "./Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="left-nav">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            style={{
              display: "block",
              borderRight: "1px solid #202020",
              padding: ".9rem 37px",
              cursor: "pointer",
            }}
          />
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
        <div className="right-nav">
          <button className="login-btn">Log in</button>
          <button className="start-btn">Start Now</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
