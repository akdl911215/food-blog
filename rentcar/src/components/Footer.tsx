"use client";
import styled from "styled-components";
import { FaCar } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background: #fff;
  border-top: 1px solid #ddd;
  padding: 2rem 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 0.5rem;
  color: #111;

  svg {
    color: #3b82f6;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1rem;

  a {
    color: #444;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CopyRight = styled.div`
  font-size: 0.95rem;
  color: #888;
  white-space: nowrap;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Logo>
        <FaCar size={20} />
        카렌트
      </Logo>
      <Menu>
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
        <a href="#">자주 묻는 질문</a>
        <a href="#">고객센터</a>
      </Menu>
      <CopyRight>© 2025 카렌트. 모든 권리 보유.</CopyRight>
    </FooterWrapper>
  );
}
