import React, { useRef, useState } from "react";
import "./Navbar.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import underline from "../../assets/nav_underline.svg";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Toggle from "../Toggle";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", key: "home" },
    { to: "/about", label: "About Me", key: "about" },
    { to: "/services", label: "Services", key: "services" },
    { to: "/port", label: "Portfolio", key: "work" },
    { to: "/contact", label: "Contact", key: "contact" },
  ];

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="nav">
      <div className="first-nav">
        <Link to="/">
          <h1>
            George<span>.</span>
          </h1>
          <img src={theme_pattern} alt="" />
        </Link>
      </div>
      <RiMenu3Line onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <IoClose onClick={closeMenu} className="nav-mob-close" />
        {links.map((link) => {
          const isActive = location.pathname === link.to;

          return (
            <li key={link.key} className="relative">
              <Link to={link.to} className="link z-10 relative">
                {link.label}
                {isActive && (
                  <motion.img
                    src={underline}
                    alt="underline"
                    className="absolute -right-2 -z-2 bottom-0"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="cup">
        <Toggle />
        <a
          href="https://linkedin.com/in/gowinstar55555?"
          className="nav-connect"
        >
          <div>
            <i>Connect</i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
