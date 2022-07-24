import React, {useRef} from 'react'
import "../components/style/Header.css"
import { SiCodechef } from 'react-icons/si';
import {BsBasket} from "react-icons/bs"
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import {FaBars,FaTimes} from 'react-icons/fa'
const Header = () => {

  const state = useSelector((state)=>state.basketItems)
  const navref =useRef()
  const showNavbar = ()=>{
    navref.current.classList.toggle("responsive_navbar")
  }
  return (
    <header>

      <Link className='nav-logo' to='/'>
        <h2 >BIG<SiCodechef />CHEF</h2>
      </Link>
      
      <nav ref={navref} className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='About'>About</Link>
        <Link to='Menu'>Menu</Link>
        <Link to='Install'>Install App</Link>
        
         <Link to='Basket'>
             <span className='basket'><BsBasket/>
               <span className='items'>{state.length}</span>
             </span>
         </Link>
        
      <button className='nav-btn close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn close-btn' onClick={showNavbar}>
        <FaBars/>
       </button>
    </header>
  )
}

export default Header
