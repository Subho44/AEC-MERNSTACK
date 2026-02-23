import React from 'react'

const Navbar = () => {

  return <>
  <nav className='bg-blue-300 p-4'>
    <div className='max-w-6xl mx-auto flex justify-between items-center '>
        <h1 className='text-white text-xl font-bold'>Job portal</h1>
        <ul className='flex gap-6 text-white'>
            <li className='hover:text-yellow-300 cursor-pointer'>Home</li>
            <li className='hover:text-yellow-300 cursor-pointer'>About</li>
            <li className='hover:text-yellow-300 cursor-pointer'>Contact</li>
        </ul>
    </div>
  </nav>
  
  
  </>
}

export default Navbar