import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navbar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 10px;
  }

  ul:first-child {
    flex-direction: flex-start;
  }

  ul:last-child {
    flex-direction: flex-end;
  }

  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Page = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 10px;
  cursor: pointer;

  &:active {
    color: #0078e0;
  }
`;
