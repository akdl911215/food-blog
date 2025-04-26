"use client";
import React from "react";
import styled from "styled-components";
import { FaStar, FaClock, FaMapMarkerAlt } from "react-icons/fa"; // 아이콘 사용

const Section = styled.section`
  background-color: #f9fafb;
  padding: 5rem 2.5rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
`;

const IconWrapper = styled.div`
  background: #f3f4f6;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled.div`
  font-size: 1.5rem;
  color: #111;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666666;
  text-align: center;
  line-height: 1.5;
`;

const FeaturesSection = () => {
  return (
    <Section>
      <Card>
        <IconWrapper>
          <StyledIcon>
            <FaStar />
          </StyledIcon>
        </IconWrapper>
        <Title>전문 의료진</Title>
        <Description>
          풍부한 경험과 전문 지식을 갖춘 의료진이 안전하고 만족스러운 결과를
          약속합니다.
        </Description>
      </Card>

      <Card>
        <IconWrapper>
          <StyledIcon>
            <FaClock />
          </StyledIcon>
        </IconWrapper>
        <Title>맞춤형 상담</Title>
        <Description>
          개인의 특성과 요구에 맞는 맞춤형 상담으로 최적의 시술 방법을
          제안합니다.
        </Description>
      </Card>

      <Card>
        <IconWrapper>
          <StyledIcon>
            <FaMapMarkerAlt />
          </StyledIcon>
        </IconWrapper>
        <Title>최신 시설</Title>
        <Description>
          첨단 의료 장비와 쾌적한 환경에서 편안하게 시술받으실 수 있습니다.
        </Description>
      </Card>
    </Section>
  );
};

export default FeaturesSection;
