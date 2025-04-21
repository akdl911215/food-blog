"use client";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f1f4fa;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FeatureGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  max-width: 300px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
`;

export default function Features() {
  return (
    <Section>
      <Title>왜 카렌트를 선택해야 할까요?</Title>
      <FeatureGrid>
        <Card>
          <h3>안전 보장</h3>
          <p>정기 점검된 차량만 제공합니다.</p>
        </Card>
        <Card>
          <h3>투명한 가격</h3>
          <p>모든 요금이 명확하게 표시됩니다.</p>
        </Card>
        <Card>
          <h3>24시간 지원</h3>
          <p>언제든 도움을 받을 수 있습니다.</p>
        </Card>
      </FeatureGrid>
    </Section>
  );
}
