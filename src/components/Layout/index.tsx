import React, { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { getIsLoggedIn, getUserName } from 'store/auth/auth-selectors';
import { useLogoutUserMutation } from 'store/auth/auth-operations';

import { ButtonWrapper, Container, Header, Link, Nav, UserMenu } from './styled';

const Layout = () => {
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);

  const logoutHandler = async () => {
    await logoutUser(null);
    navigate('/login');
  };

  return (
    <>
      <Header>
        <Container>
          <Nav>
            {isLoggedIn ? (
              <UserMenu>
                <Link to={'/contacts'}>contacts</Link>
                <ButtonWrapper>
                  <p>Welcome {userName}. Happy to see you</p>
                  <Button onClick={logoutHandler}>Logout</Button>
                </ButtonWrapper>
              </UserMenu>
            ) : (
              <>
                <Link to={'/login'}>Login</Link>
                <Link to={'/registration'}>Registration</Link>
              </>
            )}
          </Nav>
        </Container>
      </Header>

      <Suspense fallback={<>Loading...</>}>
        <Container>
          <h1>Phonebook</h1>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default Layout;
