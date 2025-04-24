import styled from 'styled-components';
import Image from 'next/image';
import heroImage from '@/assets/images/hero.jpg';

const Section = styled.section`
  background: url(${heroImage.src}) center/cover no-repeat;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 640px;
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

export default function Hero() {
  return (
    <Section>
      <Title>기대를 넘어선 럭셔리</Title>
      <Subtitle>청담동의 중심에서 경험하는 최상의 호스피탈리티</Subtitle>
      <ButtonGroup>
        <button>객실 보기</button>
        <button>더 알아보기</button>
      </ButtonGroup>
    </Section>
  );
}
