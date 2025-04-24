// pages/components/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        // For development with fixed credentials, we'll skip the actual API call
        // and just assume the token is valid if it exists
        setIsAuthenticated(true);
        setLoading(false);

        // In production, you would verify with your backend:
        /*
        const response = await axios.get('http://localhost:4000/api/auth/verify', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setIsAuthenticated(response.data.isAuthenticated);
        setLoading(false);
        */
      } catch (error) {
        console.error('Auth verification error:', error);
        setIsAuthenticated(false);
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Save the location the user was trying to access
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;