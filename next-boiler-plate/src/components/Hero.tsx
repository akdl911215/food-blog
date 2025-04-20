import styled from "styled-components";

const HeroSection = styled.section`
  background: #eee;
  text-align: center;
  padding: 10rem 2rem;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  input {
    width: 400px;
    max-width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    outline: none;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 0.95rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <h1>맛있는 발견</h1>
      <p>맛집 탐방과 요리 레시피를 공유하는 음식 블로그입니다</p>
      <input placeholder="맛집 검색하기…" />
    </HeroSection>
  );
}
