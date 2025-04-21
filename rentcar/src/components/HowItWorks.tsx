"use client";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Steps = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Step = styled.div`
  max-width: 200px;
`;

const Circle = styled.div`
  background: #4f5fff;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
`;

export default function HowItWorks() {
  return (
    <Section>
      <Title>간편한 예약 과정</Title>
      <Steps>
        <Step>
          <Circle>1</Circle>
          <h4>차량 선택</h4>
          <p>다양한 차종 중 원하는 차량을 고르세요.</p>
        </Step>
        <Step>
          <Circle>2</Circle>
          <h4>예약 확인</h4>
          <p>날짜를 선택하고 예약을 마무리하세요.</p>
        </Step>
        <Step>
          <Circle>3</Circle>
          <h4>차량 수령</h4>
          <p>지정된 장소에서 차량을 수령하고 출발!</p>
        </Step>
      </Steps>
    </Section>
  );
}
