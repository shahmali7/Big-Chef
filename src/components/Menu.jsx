import React from 'react'
import PhotoChef from "../components/bigPhoto.jpg"
import "./style/Menu.css"
import {Link} from "react-router-dom"
import {FaHandPointLeft} from "react-icons/fa"
const Menu = () => {
  
  return (
    <div className='Menu'>
      <Link to='/' ><FaHandPointLeft/> Main Menu</Link>
      <img className='Menu-img' src={PhotoChef} alt=''/>
    </div>
  )
}

export default Menu