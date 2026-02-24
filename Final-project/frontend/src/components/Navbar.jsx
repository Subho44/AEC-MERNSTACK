import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const hl = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return <>
    <nav className='bg-blue-300 p-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center '>
        <h1 className='text-white text-xl font-bold'>Job portal</h1>
        <ul className='flex gap-6 text-white'>
          <li className='hover:text-yellow-300 cursor-pointer'>
            <Link to="/">Register</Link>
          </li>
          <li className='hover:text-yellow-300 cursor-pointer'>
            <Link to="/login">Login</Link>
          </li>

          {token && (
            <>
              <li className='hover:text-yellow-300 cursor-pointer'>
                <Link to="/home">Home</Link>
              </li>
              <li className='hover:text-yellow-300 cursor-pointer'>
                <Link to="/about">About</Link>
              </li>
              <li className='hover:text-yellow-300 cursor-pointer'>
                <Link to="/contact">Contact</Link>
              </li>
              <li className='hover:text-yellow-300 cursor-pointer'>
                <button onClick={hl}>Logout</button>
              </li>

            </>
          )}



        </ul>
      </div>
    </nav>


  </>
}

export default Navbar