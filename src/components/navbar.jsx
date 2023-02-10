import React from 'react'
import Navitem from './Navitem'
import profilepic from "../img/slika.png"

function Navbar() {
  return (
    <nav>
    <ul>
    <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
    <Navitem item="Home" tolink="/" ></Navitem>
    <Navitem item="About" tolink="/about" ></Navitem>
    <Navitem item="Education" tolink="/education" ></Navitem>
    <Navitem item="Skills" tolink="/skills" ></Navitem>
    <Navitem item="Contact" tolink="/contact" ></Navitem> 
    </ul>
    </nav>
  )
}

export default Navbar;
