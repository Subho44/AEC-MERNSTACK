import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const hlog = ()=> {
    localStorage.setItem("islogin","true");
    navigate('/dashboard');
    window.location.reload();
  }
  return <>
  <div>
    <h2>Login page</h2>
    <button className='btn btn-dark' onClick={hlog}>Login</button>
  </div>
  
  </>
}

export default Login