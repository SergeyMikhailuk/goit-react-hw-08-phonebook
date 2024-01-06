import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLoggedIn } from 'store/auth/auth-selectors';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to={redirectTo} replace />}</>;
};

export default PrivateRoute;

type PrivateRouteProps = {
  redirectTo: string;
  children: React.ReactNode;
};
