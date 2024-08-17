import React, { Children, useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const checkAuthStatus = async () => {
        try{
          const response = await axios.get("http://localhost:5000/api/auth/status", {withCredentials: true});
          console.log("response is :",response.data);
          setIsAuthenticated(response.data.isAuthenticated);
          setAuthUser(response.data.user);
          setIsLoading(false);
        }catch(error){
          console.log("Error is :",error);
        }
      };
      checkAuthStatus();
  }, []);
  if(isLoading){
    return(
      <div className='flex items-center justify-center h-screen'>Loading....</div>
    )
  }
  if(!isAuthenticated && !authUser){
    return <Navigate to='/signin' />
  }
  return children

}

export default ProtectedRoute
