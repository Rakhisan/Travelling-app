import React, { useState } from "react";
import "./Navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  // State for toggling the navbar
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  // State for background color on scroll
  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="/" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              Dot
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItems">
              <a href="/" className="navLinks">
                Home
              </a>
            </li>
            <li className="navItems">
              <a href="/products" className="navLinks">
                Products
              </a>
            </li>
            <li className="navItems">
              <a href="/resources" className="navLinks">
                Resources
              </a>
            </li>
            <li className="navItems">
              <a href="/contact" className="navLinks">
                Contact
              </a>
            </li>
            <li className="navItems">
              <a href="/blog" className="navLinks">
                Blog
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="/login">Login</a>
              </button>
              <button className="btn signupBtn">
                <a href="/signup">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
