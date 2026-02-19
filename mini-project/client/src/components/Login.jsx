import React from 'react'

const Login = () => {

  return <>
  <div className='bg-white p-6 rounded-lg w-full max-w-sm'>
    <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
    <div className='mb-4'>
        <label className='block text-gray-700 mb-1'>
            Email
        </label>
        <input 
         type='email'
         placeholder='Enter Email...'
         className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-blue-500'
        
        />

    </div>
    <div className='mb-4'>
        <label className='block text-gray-700 mb-1'>
            Password
        </label>
        <input 
         type='password'
         placeholder='Enter Password...'
         className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-blue-500'
        
        />
       

    </div>

     <button className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition' >
            Login
        </button>
  </div>
  
  </>
}

export default Login