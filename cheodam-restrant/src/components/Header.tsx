import styled from 'styled-components';

const Container = styled.header`
  background: #1a1a1a;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f4c430;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const Link = styled.a`
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;

  &:hover {
    color: #f4c430;
  }
`;

export default function Header() {
  return (
    <Container>
      <Logo>Maison Lumière</Logo>
      <Nav>
        <Link href="#menu">Menu</Link>
        <Link href="#chef">Chef</Link>
        <Link href="#reservation">Reservation</Link>
        <Link href="#contact">Contact</Link>
      </Nav>
    </Container>
  );
}