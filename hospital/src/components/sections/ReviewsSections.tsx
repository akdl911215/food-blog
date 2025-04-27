"use client";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f9fafb;
  padding: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
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
  border-radius: 12px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.h4`
  font-weight: 700;
  font-size: 1.125rem;
`;

const Type = styled.p`
  font-size: 0.875rem;
  color: #888888;
  margin-bottom: 0.75rem;
`;

const Stars = styled.div`
  color: #facc15;
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

const ReviewText = styled.p`
  font-size: 0.9rem;
  color: #444444;
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;

const Date = styled.p`
  font-size: 0.75rem;
  color: #999999;
`;

const MoreButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const MoreButton = styled.button`
  border: 1px solid #ddd;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  background-color: #fff;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const reviews = [
  {
    name: "김지영",
    type: "눈 성형",
    review:
      "자연스러운 쌍꺼풀 수술로 인상이 밝아졌어요. 상담부터 수술, 사후 관리까지 모두 만족스러웠습니다.",
    date: "2023.09.15",
  },
  {
    name: "이현우",
    type: "안면 윤곽",
    review:
      "고민 끝에 결정한 안면 윤곽 수술, 결과가 너무 만족스럽습니다. 자연스러운 V라인을 찾았어요!",
    date: "2023.08.22",
  },
  {
    name: "박미나",
    type: "보톡스 & 필러",
    review:
      "정기적으로 보톡스와 필러 시술을 받고 있어요. 항상 자연스러운 결과로 만족하고 있습니다.",
    date: "2023.10.05",
  },
];

const ReviewsSection = () => {
  return (
    <Section>
      <Title>고객 후기</Title>
      <Subtitle>
        뷰티메디를 통해 변화를 경험한 고객님들의 생생한 후기를 확인하세요
      </Subtitle>
      <Grid>
        {reviews.map((item, i) => (
          <Card key={i}>
            <div>
              <Name>{item.name}</Name>
              <Type>{item.type}</Type>
              <Stars>★★★★★</Stars>
              <ReviewText>"{item.review}"</ReviewText>
            </div>
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

export default ReviewsSection;
