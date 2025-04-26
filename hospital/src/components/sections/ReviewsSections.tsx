'use client';
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #f9fafb;
  padding: 2.5rem;
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
`;

const Name = styled.h4`
  font-weight: 700;
  font-size: 1.125rem;
`;

const Type = styled.p`
  font-size: 0.875rem;
  color: #666666;
`;

const ReviewText = styled.p`
  font-size: 0.875rem;
  color: #444444;
  margin-top: 0.5rem;
`;

const Date = styled.p`
  font-size: 0.75rem;
  color: #999999;
  margin-top: 0.5rem;
`;

const MoreButtonWrapper = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

const MoreButton = styled.button`
  color: #0070f3;
  font-weight: 500;
  text-decoration: underline;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #0050c3;
  }
`;

const reviews = [
  {
    name: '김지영',
    type: '눈 성형',
    review:
      '자연스러운 쌍꺼풀 수술로 인상이 밝아졌어요. 상담부터 수술, 사후 관리까지 모두 만족스러웠습니다.',
    date: '2023.09.15',
  },
  {
    name: '이현우',
    type: '안면 윤곽',
    review:
      '고민 끝에 결정한 안면 윤곽 수술, 결과가 너무 만족스럽습니다. 자연스러운 V라인을 찾았어요!',
    date: '2023.08.22',
  },
  {
    name: '박미나',
    type: '보톡스 & 필러',
    review:
      '정기적으로 보톡스와 필러 시술을 받고 있어요. 항상 자연스러운 결과로 만족하고 있습니다.',
    date: '2023.10.05',
  },
];

const ReviewsSections = () => {
  return (
    <Section>
      <Title>고객 후기</Title>
      <Grid>
        {reviews.map((item, i) => (
          <Card key={i}>
            <Name>{item.name}</Name>
            <Type>{item.type}</Type>
            <ReviewText>"{item.review}"</ReviewText>
            <Date>{item.date}</Date>
          </Card>
        ))}
      </Grid>
      <MoreButtonWrapper>
        <MoreButton>더 많은 후기 보기</MoreButton>
      </MoreButtonWrapper>
    </Section>
  );
};

export default ReviewsSections;
