"use client";
import styled from "styled-components";
import { FiShield, FiCreditCard, FiClock } from "react-icons/fi";

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f9fbff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2.5rem;
`;

const FeatureGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  max-width: 280px;
  flex: 1;
  text-align: left;
  min-width: 250px;
`;

const IconCircle = styled.div`
  background: #eef3ff;
  color: #3b82f6;
  border-radius: 50%;
  padding: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

export default function Features() {
  return (
    <Section>
      <Title>왜 카렌트를 선택해야 할까요?</Title>
      <SubTitle>고객 만족을 최우선으로 생각하는 카렌트만의 특별한 서비스</SubTitle>

      <FeatureGrid>
        <Card>
          <IconCircle>
            <FiShield />
          </IconCircle>
          <FeatureTitle>안전 보장</FeatureTitle>
          <FeatureDescription>
            모든 차량은 정기적인 안전 점검을 통과한 차량만 제공합니다.
          </FeatureDescription>
        </Card>

        <Card>
          <IconCircle>
            <FiCreditCard />
          </IconCircle>
          <FeatureTitle>투명한 가격</FeatureTitle>
          <FeatureDescription>
            숨겨진 비용 없이 모든 요금이 명확하게 표시됩니다.
          </FeatureDescription>
        </Card>

        <Card>
          <IconCircle>
            <FiClock />
          </IconCircle>
          <FeatureTitle>24시간 지원</FeatureTitle>
          <FeatureDescription>
            언제든지 도움이 필요할 때 연중무휴 고객 지원 서비스를 제공합니다.
          </FeatureDescription>
        </Card>
      </FeatureGrid>
    </Section>
  );
}
