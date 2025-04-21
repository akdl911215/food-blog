"use client";
import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const Section = styled.section`
  background: #f5f7fa;
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  color: #777;
  margin-bottom: 2rem;
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const Item = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const Answer = styled.div`
  background: #f9f9f9;
  padding: 1rem 1.5rem;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const questions = [
  { q: "예약 취소는 어떻게 하나요?", a: "예약 확인 페이지에서 간단히 취소 가능합니다." },
  { q: "보험은 어떻게 적용되나요?", a: "기본 보험 포함이며 추가 보험도 선택할 수 있어요." },
  { q: "렌트카 이용에 필요한 서류는 무엇인가요?", a: "운전면허증과 본인 확인이 가능한 신분증이 필요합니다." },
  { q: "연료 정책은 어떻게 되나요?", a: "대여 시와 동일한 연료량으로 반납하시면 됩니다." },
  { q: "추가 운전자 등록은 어떻게 하나요?", a: "예약 시 옵션으로 등록하거나 현장에서 추가 가능합니다." },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section>
      <Title>자주 묻는 질문</Title>
      <SubTitle>고객님들이 자주 문의하시는 질문들에 대한 답변입니다</SubTitle>
      <FAQList>
        {questions.map((item, index) => (
          <div key={index}>
            <Item onClick={() => toggle(index)}>
              <span>{item.q}</span>
              <IoIosArrowDown size={20} style={{ transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
            </Item>
            {activeIndex === index && <Answer>{item.a}</Answer>}
          </div>
        ))}
      </FAQList>
    </Section>
  );
}