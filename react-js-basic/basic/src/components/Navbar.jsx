import React from 'react'
import { Link,useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';

const Navbar = () => {
  const [islogin,setLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    const status = localStorage.getItem("islogin") ==="true";
    setLogin(status);
  },[]);

  const hl =()=> {
    localStorage.removeItem("islogin");
    setLogin(false);
    navigate("/login");
  }


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
        {/*if not login */}
        {!islogin && (
           <li className='nav-item'>
            <Link to="/login" className='nav-link text-success'>Login</Link>
          </li>
        )}
         {/*if login */}

         {
          islogin && (
            <>
            <li className='nav-item'>
            <Link to="/dashboard" className='nav-link'>Dashboard</Link>
           </li>
             <li className='nav-item'>
            <button className='btn btn-danger' onClick={hl}>Logout</button>
           </li>
            </>
          )}
         </ul>
  </div>
  
  
  </>
}


export default Navbar