import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteAccess = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    alert('You must log in to access this page');
    return <Navigate to="/" />;
  }
  return children;
};

export default RouteAccess;
