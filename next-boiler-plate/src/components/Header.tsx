import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: #ff6a00;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  font-weight: 600;
  font-size: 1rem;

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #ff6a00;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
    font-size: 0.95rem;
  }
`;

const Auth = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.95rem;
    border: none;
  }

  .login {
    background: white;
    color: #333;
    border: 1px solid #ccc;

    &:hover {
      border-color: #888;
    }
  }

  .signup {
    background: #ff6a00;
    color: white;

    &:hover {
      background: #e95e00;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    gap: 0.5rem;

    button {
      flex: 1;
      font-size: 0.9rem;
      padding: 0.5rem 0.75rem;
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>맛있는발견</Logo>
      <Nav>
        <a href="#">홈</a>
        <a href="#">맛집 리스트</a>
        <a href="#">레시피</a>
        <a href="#">소개</a>
        <a href="#">문의</a>
      </Nav>
      <Auth>
        <button className="login">로그인</button>
        <button className="signup">가입하기</button>
      </Auth>
    </HeaderWrapper>
  );
}
