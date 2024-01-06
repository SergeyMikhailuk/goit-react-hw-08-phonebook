import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 16px;
  border-bottom: solid 2px red;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-weight: 600;
  text-decoration: none;

  &.active,
  &:hover {
    color: lightsalmon;
    transition: color 250ms ease-in-out;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  & p {
    color: cornflowerblue;
    margin-right: 12px;
  }
`;
