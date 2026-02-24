import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [form,setForm] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const hc = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const hs = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5800/api/auth/login",form);
        localStorage.setItem('token',res.data.token);
        navigate("/home");
    }
  return <>
  <form onSubmit={hs} className='max-w-md mx-auto mt-10 p-6 border rounded bg-blue-200'>
    
    email: <input type="email" name='email' placeholder='enter email' onChange={hc} className='w-full p-2 border rounded mb-4' required />
    <br />
    password: <input type="password" name='password' placeholder='enter password' onChange={hc} className='w-full p-2 border rounded mb-4' required />
    <br />
    <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
  </form>
  
  </>
}

export default Login