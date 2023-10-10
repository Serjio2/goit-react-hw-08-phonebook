import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

export const AuthNavItem = styled.li`
list-style: none;
`;

export const AuthNavLink = styled(NavLink)`
  display: block;
  font-size: 14px;
  padding: 20px 30px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 14px;
  text-decoration: none;
`;