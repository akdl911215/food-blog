import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background: #fafafa;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid #eee;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  color: #333;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Title = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.25rem;

  span {
    font-weight: normal;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  line-height: 1.5;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;

  svg {
    font-size: 1rem;
    color: #666;
    cursor: pointer;

    &:hover {
      color: #111;
    }
  }
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.6rem;
  flex: 1;
  font-size: 0.9rem;
  border: none;
  outline: none;
`;

const Button = styled.button`
  background: #c4a076;
  color: white;
  border: none;
  padding: 0 1rem;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background: #b28c63;
  }
`;

const Bottom = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.8rem;
  color: #aaa;
`;

const Footer = () => (
  <FooterWrapper>
    <Container>
      <Column>
        <Logo>
          LUXE <span>SEOUL</span>
        </Logo>
        <Description>
          청담동의 중심에서 경험하는 최상의 호스피탈리티, <br />
          럭스 서울에서 잊지 못할 추억을 만들어보세요.
        </Description>
        <SocialIcons>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </SocialIcons>
      </Column>

      <Column>
        <Title>호텔 정보</Title>
        <Link>소개</Link>
        <Link>객실</Link>
        <Link>다이닝</Link>
        <Link>스파 & 웰니스</Link>
        <Link>웨딩 & 연회</Link>
        <Link>갤러리</Link>
      </Column>

      <Column>
        <Title>예약 & 문의</Title>
        <Link>객실 예약</Link>
        <Link>다이닝 예약</Link>
        <Link>스파 예약</Link>
        <Link>웨딩 문의</Link>
        <Link>기업 행사</Link>
        <Link>자주 묻는 질문</Link>
      </Column>

      <Column>
        <Title>뉴스레터 구독</Title>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          럭스 서울의 특별한 프로모션과 이벤트 소식을 가장 먼저 받아보세요.
        </p>
        <InputGroup>
          <Input placeholder="이메일 주소" />
          <Button>구독</Button>
        </InputGroup>
      </Column>
    </Container>

    <Bottom>© 2025 럭스 서울. All rights reserved.</Bottom>
  </FooterWrapper>
);

export default Footer;
