import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return <>
  <div className='container-fluid'>
    <ul className='nav'>
        <li className='nav-item'>
            <Link to="/" className='nav-link'>Home</Link>
        </li>
         <li className='nav-item'>
            <Link to="/about" className='nav-link'>About</Link>
        </li>
         <li className='nav-item'>
            <Link to="/contact?name=raj&city=kolkata&course=mern" className='nav-link'>Contact</Link>
        </li>
         <li className='nav-item'>
            <Link to="/login" className='nav-link'>Login</Link>
        </li>
         <li className='nav-item'>
            <Link to="/dashboard" className='nav-link'>Dashboard</Link>
        </li>
         

    </ul>
  </div>
  
  
  </>
}

export default Navbar