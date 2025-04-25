import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: transparent;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 1.03rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  span {
    color: #f4c430;
  }
`;

const NavLink = styled.a`
  color: #f4c430;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const ReserveButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #f4c430;
  background: transparent;
  color: #f4c430;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #f4c430;
    color: #111;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Logo>
        LUXE <span>SEOUL</span>
      </Logo>
      <Nav>
        <NavLink href="#">객실</NavLink>
        <NavLink href="#">다이닝</NavLink>
        <NavLink href="#">스파</NavLink>
        <NavLink href="#">웨딩</NavLink>
        <NavLink href="#">미팅</NavLink>
        <NavLink href="#">갤러리</NavLink>
      </Nav>
      <ReserveButton>예약하기</ReserveButton>
    </Header>
  );
};

export default HeaderComponent;
