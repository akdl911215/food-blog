import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #0e1116;
  color: #e4e4e4;
  padding: 4rem 2rem 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  line-height: 1.6;

  h4 {
    font-weight: bold;
    color: #fff;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;
      color: #d0d0d0;
    }
  }

  p {
    margin-bottom: 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
  margin-top: 0.75rem;

  a {
    color: #ccc;
    text-decoration: none;

    &:hover {
      color: #f26522;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #888;
  border-top: 1px solid #222;
  padding-top: 1.5rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterSection>
          <h4>맛있는발견</h4>
          <p>
            맛집 탐방과 요리 레시피를 공유하는 음식 블로그입니다. 전국의 숨은
            맛집을 발견하고 공유합니다.
          </p>
          <SocialIcons>
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
            <a href="#">▶️</a>
          </SocialIcons>
        </FooterSection>

        <FooterSection>
          <h4>카테고리</h4>
          <ul>
            <li>맛집 리스트</li>
            <li>레시피</li>
            <li>리뷰</li>
            <li>요리 팁</li>
            <li>셰프 인터뷰</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>지역별 맛집</h4>
          <ul>
            <li>서울</li>
            <li>부산</li>
            <li>제주</li>
            <li>강원</li>
            <li>경기</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>연락처</h4>
          <p>📍 서울특별시 강남구 테헤란로 123 푸드빌딩 8층</p>
          <p>📞 010-5093-9902</p>
          <p>📧 jaychis1215@gmail.com</p>
        </FooterSection>
      </FooterGrid>

      <Copyright>© 2025 맛있는발견. 모든 권리 보유.</Copyright>
    </FooterWrapper>
  );
}
