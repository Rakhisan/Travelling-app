import React, { useState } from 'react'
import "./Navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

  // Code to toggle/show navbar
  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar') 
  } 

  // Code to remove navbar
  const removeNav = ()=>{
    setActive('navBar') 
  } 

  // Code to add bacground color to the Navbar......

  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >=10){
      setTransparent('header activeHeader')
    } 
    else{
      setTransparent('header') 
    }
  }
  window.addEventListener('scroll', addBg)
 

  return (
    <section className="navBarSection">
      <div className={transparent}> 
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='flex'><SiYourtraveldottv className='icon' />
              Dot</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex"> 

            <li className="navItems">
              <a href="#" className="navLinks">Home</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLinks">Products</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLinks">Resources</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLinks">Contact</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLinks">Blog</a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn signupBtn">
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>

  )
}
 
export default Navbar
