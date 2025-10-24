import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import { BeatLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);


    if (loading) {
     return<BeatLoader color="#e74c3c" />
 }


   if (!user) {
    return <Navigate to="/signin" replace />;
  }

 return children;
};

export default PrivateRoute;