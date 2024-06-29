import React from 'react'
import logo from "../assets/Screenshot 2024-06-16 233319.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function navbar() {
  return (
<nav className=" mb-20 flex item-center justify-between py-6">
  <div className="flex flex-shrink-0 item-center">
    <img src={logo} alt="logo" className='w-20 mx-2' />
  </div>
  <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      
      <FaLinkedin/> 
      <FaGithub />
      {/* <FaSquareXTwitter /> */}
      <FaInstagram />      
  </div>
</nav>
  )
}

export default navbar