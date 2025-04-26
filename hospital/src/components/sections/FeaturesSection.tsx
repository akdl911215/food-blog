'use client';
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #666666;
`;

const FeaturesSection = () => {
  return (
    <Section>
      <Card>
        <Title>전문 의료진</Title>
        <Description>
          풍부한 경험과 전문 지식을 갖춘 의료진이 안전하고 만족스러운 결과를
          약속합니다.
        </Description>
      </Card>
      <Card>
        <Title>맞춤형 상담</Title>
        <Description>
          개인의 특성과 요구에 맞는 맞춤형 상담으로 최적의 시술 방법을
          제안합니다.
        </Description>
      </Card>
      <Card>
        <Title>최신 시설</Title>
        <Description>
          첨단 장비와 쾌적한 환경에서 편안하게 시술받으실 수 있습니다.
        </Description>
      </Card>
    </Section>
  );
};

export default FeaturesSection;
