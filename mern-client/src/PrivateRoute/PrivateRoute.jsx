import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="center spinner example" />
      </div>
    );
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
