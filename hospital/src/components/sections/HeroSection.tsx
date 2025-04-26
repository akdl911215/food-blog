"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 2.5rem;
  background-color: #ffffff;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const PrimaryButton = styled.button`
  background: #111;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background: #333;
  }
`;

const SecondaryButton = styled.button`
  border: 1px solid #ddd;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background: #fff;
  transition: background 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Star = styled.span`
  font-size: 1.25rem;
  color: #facc15; /* Tailwind yellow-400 */
`;

const Score = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

const RightContent = styled.div`
  flex: 1.2;
  background: linear-gradient(to right, #f3f4f6, #f9fafb);
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: auto;
`;

const Placeholder = styled.div`
  color: #ccc;
  font-size: 1.2rem;
`;

const HeroSection = () => {
  return (
    <Section>
      <LeftContent>
        <Title>
          자신감 있는 아름다움을
          <br />
          경험하세요
        </Title>
        <Description>
          최신 기술과 경험 풍부한 의료진이 함께하는 뷰티메디에서 당신만의
          아름다움을 찾아드립니다.
        </Description>
        <ButtonGroup>
          <PrimaryButton>무료 상담 예약 →</PrimaryButton>
          <SecondaryButton>시술 안내 보기</SecondaryButton>
        </ButtonGroup>
        <RatingWrapper>
          <Stars>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i}>★</Star>
              ))}
          </Stars>
          <Score>4.9 (300+ 리뷰)</Score>
        </RatingWrapper>
      </LeftContent>

      <RightContent>
        <Image
          src="/model.png"
          alt="뷰티메디 모델 이미지"
          width={400}
          height={500}
          style={{
            objectFit: "cover",
            borderRadius: "1.5rem",
            width: "100%",
            height: "auto",
          }}
        />
      </RightContent>
    </Section>
  );
};

export default HeroSection;
