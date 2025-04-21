"use client";
import styled from "styled-components";

const Wrapper = styled.footer`
  background: #111;
  color: #eee;
  padding: 3rem 2rem;
  font-size: 0.9rem;
  text-align: center;
`;

export default function Footer() {
  return <Wrapper>© 2025 카렌트. 모든 권리 보유.</Wrapper>;
}
