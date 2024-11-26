import { NavLink, Outlet } from "react-router-dom"
import "./navbar.css"
import "./header.css"
import "./footer.css"
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export const Layout = () => {


    return <>
        <nav className="navBar">
            <h1 className="navBar__title">SNAPFLOW</h1>
            <ul className="navBar__link">
               <NavLink to="/" className="navBar__home">HOME</NavLink>
               <NavLink to="/fav" className="navBar__fav">MY PHOTOS</NavLink>
            </ul>
        </nav>   
        <header className="header">
            <img className="header__image" src="/img/pexels-photo-1655166.jpeg" alt="Mar_foto" />
            <h2 className="header__title">WELCOME TO YOUR <br /> IMAGE COLLECTION</h2>
            <p className="header__text">Explore, save, and organize your favorite <br/> images all in one place</p>
            <input className="header__search" type="text" placeholder="Search Image" />
            <button className="header__button"><CiSearch/></button>
        </header>
        <Outlet/> 
        <footer className="footer">
            <h1 className="footer__title">SNAPFLOW</h1>
            <CiLinkedin className="footer__linkedin"/>
            <FaInstagram className="footer__instagram"/>
            <FaXTwitter className="footer__x"/>
        </footer>
    </>
}