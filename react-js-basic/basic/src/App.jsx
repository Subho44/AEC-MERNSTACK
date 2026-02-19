import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Protectedroute from './components/Protectedroute'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const App = () => {

  return <>
  <BrowserRouter>
  <Navbar/>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About msg="welldone"/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route 
      path='/dashboard'
      element={
        <Protectedroute>
          <Dashboard/>
        </Protectedroute>
      }
      >

     <Route path='profile' element={<Profile/>}></Route>

      </Route>
   </Routes>
  
  </BrowserRouter>
 
  </>
}

export default App