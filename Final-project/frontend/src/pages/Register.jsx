import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [form,setForm] = useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const hc = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const hs = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5800/api/auth/register",form);
        alert("Registration successful! Please login.");
        navigate("/login");
    }
  return <>
  <form onSubmit={hs} className='max-w-md mx-auto mt-10 p-6 border rounded bg-blue-200'>
    name: <input type="text" name='name' placeholder='enter name' onChange={hc} className='w-full p-2 border rounded mb-4' required />
    <br />
    email: <input type="email" name='email' placeholder='enter email' onChange={hc} className='w-full p-2 border rounded mb-4' required />
    <br />
    password: <input type="password" name='password' placeholder='enter password' onChange={hc} className='w-full p-2 border rounded mb-4' required />
    <br />
    <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Register</button>
  </form>
  
  </>
}

export default Register