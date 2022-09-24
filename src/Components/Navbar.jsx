import React from 'react'
import { Link } from 'react-router-dom';
import './Navb.css'

const Navbar = () => {
  return (
    <>
    <h1> <span className='the'>The</span> <span className='siren'>Siren</span></h1>
    <div className='navbar'>
    <Link to="/" className='link'>Home</Link>
    <Link to="/bollywood" className='link'>Bollywood</Link>
    <Link to="/technology" className='link'>Technology</Link>
    <Link to="/hollywood" className='link'>Hollywood</Link>
    <Link to="/fitness" className='link'>Fitness</Link>
    <Link to="/food" className='link'>Food</Link>
    </div> 
    <hr className='hr'/>
    </>
  )
}
export default Navbar;