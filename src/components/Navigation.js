import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link role="link" to="/" aria-label="link">
        User status
      </Link>
      <Link to="/ships">Available ships</Link>
      <Link to="/market">Marketplace</Link>
    </nav>
  );
}

const Link = styled(NavLink)`
  padding: 4px 12px;
  border: 1px solid #bbb;
  border-radius: 4px;
  background-color: #eee;
  text-decoration: none;
  color: #333;
  &.active {
    background-color: hotpink;
  }
`;
