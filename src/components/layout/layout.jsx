import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./navbar.css";
import "./header.css";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



export const Layout = () => {
  

  return (
    <>
      <div className="page">
        <nav className="navBar">
          <h1 className="navBar__title">SNAPFLOW</h1>
          <ul className="navBar__link">
            <NavLink to="/" className="navBar__home">
              HOME
            </NavLink>
            <NavLink to="/fav" className="navBar__fav">
              MY PHOTOS
            </NavLink>
          </ul>
        </nav>
        <Outlet />
        <footer className="footer">
          <h1 className="footer__title">SNAPFLOW</h1>
          <CiLinkedin className="footer__linkedin" />
          <FaInstagram className="footer__instagram" />
          <FaXTwitter className="footer__x" />
        </footer>
      </div>
    </>
  );
};
