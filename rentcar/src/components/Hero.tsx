"use client";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 4rem;
  background: #f5f8ff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const TextBox = styled.div`
  flex: 1;
  padding-right: 3rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  color: #111;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #444;
  line-height: 1.6;
`;

const ImageBox = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    aspect-ratio: 16 / 10;
    max-width: 100%;
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <TextBox>
        <Title>빠르고 편리한 렌트카 서비스</Title>
        <Description>
          전국 어디서나 쉽고 빠르게 예약하고, 안전하게 이용하세요. <br />
          다양한 차종과 합리적인 가격으로 최고의 서비스를 제공합니다.
        </Description>
      </TextBox>

      <ImageBox>
        <Image
          src="/images/hero-car.png"
          alt="렌트카 이미지"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </ImageBox>
    </Wrapper>
  );
}
