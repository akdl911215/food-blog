import styled from 'styled-components';

const HeroSection = styled.section`
  background: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #555;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title>국제학교 준비서류 & 워킹홀리데이</Title>
      <Subtitle>공식기관 연계, 빠르게 정확한 인증</Subtitle>
    </HeroSection>
  );
}