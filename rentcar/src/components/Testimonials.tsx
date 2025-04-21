"use client";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const Card = styled.div`
  flex: 1 1 300px;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export default function Testimonials() {
  return (
    <Section>
      <Title>고객 후기</Title>
      <Grid>
        <Card>
          <strong>김민수 (서울)</strong>
          <p>차량 상태가 좋고, 예약부터 반납까지 전 과정이 간편했어요. 다음에도 이용할게요.</p>
        </Card>
        <Card>
          <strong>이지연 (부산)</strong>
          <p>가격 대비 만족도 높고, 서비스도 친절했어요. 추천!</p>
        </Card>
        <Card>
          <strong>박준호 (제주)</strong>
          <p>공항에서 바로 수령 가능해서 편했어요. 여행에 제격입니다.</p>
        </Card>
      </Grid>
    </Section>
  );
}