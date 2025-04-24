// src/components/layout/Header.tsx
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #111;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  span {
    color: #f4c430;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  li {
    cursor: pointer;
    &:hover {
      color: #f4c430;
    }
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo>LUXE <span>SEOUL</span></Logo>
      <Menu>
        <li>객실</li>
        <li>다이닝</li>
        <li>스파</li>
        <li>웨딩</li>
        <li>갤러리</li>
      </Menu>
    </Nav>
  );
}
