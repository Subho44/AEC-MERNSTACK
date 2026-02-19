import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Login from './components/Login'

const App = () => {
  return <>

  <Navbar/>
  <div className='p-6 text-center bg-stone-300 m-2'>
    <h1 className='text-2xl font-bold'>
      This is Hero Section
    </h1>
  </div>
  <div className='min-h-screen bg-gray-100 p-6'>
    <Cards/>
  </div>
  <div className='min-h-screen flex items-center justify-center bg-gray-100 '>
    <Login/>
  </div>
  </>
}

export default App