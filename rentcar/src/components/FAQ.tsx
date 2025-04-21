"use client";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Item = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;

const Question = styled.h4`
  font-weight: 600;
`;

const Answer = styled.p`
  margin-top: 0.5rem;
  color: #555;
`;

export default function FAQ() {
  return (
    <Section>
      <Title>자주 묻는 질문</Title>
      <Item>
        <Question>예약 취소는 어떻게 하나요?</Question>
        <Answer>예약 확인 페이지에서 간단히 취소 가능합니다.</Answer>
      </Item>
      <Item>
        <Question>보험은 어떻게 적용되나요?</Question>
        <Answer>기본 보험 포함이며 추가 보험도 선택할 수 있어요.</Answer>
      </Item>
    </Section>
  );
}
