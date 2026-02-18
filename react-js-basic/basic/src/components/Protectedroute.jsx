import React from 'react';

import { Navigate } from 'react-router-dom';

const Protectedroute = ({children}) => {

  const islogin = localStorage.getItem("islogin");
  if(islogin === "true") {
    return children;
  }

  return <Navigate to="/login" />;
}


export default Protectedroute;