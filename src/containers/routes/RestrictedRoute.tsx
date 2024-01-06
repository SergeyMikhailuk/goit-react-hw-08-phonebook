import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLoggedIn } from 'store/auth/auth-selectors';

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to={redirectTo} replace /> : children}</>;
};

export default RestrictedRoute;

type RestrictedRouteProps = {
  children: React.ReactNode;
  redirectTo: string;
};
