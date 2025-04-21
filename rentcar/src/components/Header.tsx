import styled from "styled-components";
import { FaCar } from "react-icons/fa";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #1a1a1a;

  svg {
    margin-right: 0.5rem;
    color: #3b82f6;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 0.95rem;
  font-weight: 500;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;

  .login {
    font-size: 0.95rem;
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
  }

  .cta {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: #2563eb;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <FaCar /> 카렌트
      </Logo>
      <Nav>
        <a href="#cars">차량</a>
        <a href="#how">예약방법</a>
        <a href="#reviews">이용후기</a>
        <a href="#faq">자주 묻는 질문</a>
        <a href="#support">고객센터</a>
      </Nav>
      <Actions>
        <button className="login">로그인</button>
        <button className="cta">예약하기</button>
      </Actions>
    </HeaderContainer>
  );
}