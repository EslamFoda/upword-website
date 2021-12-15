import { Link } from "react-router-dom";
import logo from "../imgs/logo.svg";
import "./Nav.css";
const Nav = () => {
  return (
    <>
      <nav>
        <div className="left-nav">
          <img
            src={logo}
            alt="logo"
            style={{
              display: "block",
              borderRight: "1px solid #202020",
              padding: ".9rem 37px",
            }}
          />
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className='right-nav'> 
          <button className='login-btn'>Log in</button>
          <button className='start-btn'>Start Now</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
