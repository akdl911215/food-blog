'use client';
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2.5rem;
  background-color: #f9fafb;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

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

const CardTitle = styled.h4`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #666666;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 0.75rem;
  color: #0070f3;
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: #0050c3;
  }
`;

const procedures = [
  {
    title: '눈 성형',
    description: '자연스러운 쌍꺼풀, 눈매 교정 등 다양한 눈 성형 시술',
  },
  { title: '코 성형', description: '얼굴 비율에 맞는 자연스러운 코 라인 형성' },
  {
    title: '안면 윤곽',
    description: 'V라인, 광대 축소 등 조화로운 얼굴형 디자인',
  },
  {
    title: '지방 이식',
    description: '자가 지방을 이용한 자연스러운 볼륨 회복',
  },
  {
    title: '보톡스 & 필러',
    description: '주름 개선 및 입체적인 얼굴 라인 형성',
  },
  {
    title: '리프팅',
    description: '처짐 없는 탄력 있는 피부를 위한 다양한 리프팅 시술',
  },
];

const ProceduresSection = () => {
  return (
    <Section>
      <Title>주요 시술 안내</Title>
      <Grid>
        {procedures.map((proc, index) => (
          <Card key={index}>
            <CardTitle>{proc.title}</CardTitle>
            <Description>{proc.description}</Description>
            <LinkButton href="#">자세히 보기</LinkButton>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default ProceduresSection;
