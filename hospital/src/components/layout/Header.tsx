"use client";
import Link from "next/link";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SecondaryButton = styled.button`
  border: 1px solid #111;
  background: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PrimaryButton = styled.button`
  background: #111;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>뷰티메디</Logo>
      <Nav>
        <NavLink href="#">홈</NavLink>
        <NavLink href="#features">시술안내</NavLink>
        <NavLink href="#doctors">의료진</NavLink>
        <NavLink href="#reviews">고객후기</NavLink>
        <NavLink href="#contact">오시는길</NavLink>
      </Nav>
      <ButtonGroup>
        <SecondaryButton>📞 예약문의</SecondaryButton>
        <PrimaryButton>온라인 상담</PrimaryButton>
      </ButtonGroup>
    </HeaderWrapper>
  );
};

export default Header;
