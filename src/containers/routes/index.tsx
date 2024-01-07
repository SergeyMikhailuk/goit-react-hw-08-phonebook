import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import BaseRedirect from './BaseRedirect';

const Login = lazy(() => import('containers/pages/Login'));
const Registration = lazy(() => import('containers/pages/Registration'));
const Contacts = lazy(() => import('containers/pages/Contacts'));

const routing = () => (
  <Route path="/" element={<Layout />}>
    <Route index element={<BaseRedirect />} />
    <Route
      path="login"
      element={
        <RestrictedRoute redirectTo="/contacts">
          <Login />
        </RestrictedRoute>
      }
    />

    <Route
      path="registration"
      element={
        <RestrictedRoute redirectTo="/contacts">
          <Registration />
        </RestrictedRoute>
      }
    />

    <Route
      path="contacts"
      element={
        <PrivateRoute redirectTo="/login">
          <Contacts />
        </PrivateRoute>
      }
    />

    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
);

export default routing;
