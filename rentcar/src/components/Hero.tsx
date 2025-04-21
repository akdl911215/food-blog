"use client";
import styled from "styled-components";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi"; // 아이콘 사용 위해 설치 필요

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 5rem 3rem;
  background: linear-gradient(to right, #f7f9fc, #eef2f7);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }
`;

const TextBox = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  margin-left: 3rem;
  color: #111;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.8;
  margin-left: 3rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 3rem;
  margin-bottom: 1.5rem;
`;

const ButtonPrimary = styled.button`
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

const ButtonSecondary = styled.button`
  background: white;
  color: #333;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }
`;

const FeatureList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin-left: 3rem;
  color: #555;
  font-size: 0.95rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  svg {
    color: #3b82f6;
  }
`;

const ImageBox = styled.div`
  flex: 1.2;
  position: relative;
  width: 100%;
  max-width: 1040px;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    max-width: 100%;
    aspect-ratio: 16 / 10;
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

        <ButtonGroup>
          <ButtonPrimary>지금 예약하기</ButtonPrimary>
          <ButtonSecondary>차량 둘러보기</ButtonSecondary>
        </ButtonGroup>

        <FeatureList>
          <li>
            <FiCheckCircle size={18} /> 무료 취소
          </li>
          <li>
            <FiCheckCircle size={18} /> 24시간 고객지원
          </li>
          <li>
            <FiCheckCircle size={18} /> 보험 포함
          </li>
        </FeatureList>
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
