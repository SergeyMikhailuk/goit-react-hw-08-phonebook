import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'store/auth/auth-selectors';

const BaseRedirect = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" replace /> : <Navigate to="/login" replace />;
};

export default BaseRedirect;
