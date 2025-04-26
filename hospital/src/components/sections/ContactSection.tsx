'use client';
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 2.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border-radius: 8px;
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const Text = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  height: 6rem;
  resize: none;
`;

const Label = styled.label`
  font-size: 0.875rem;
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #111;
  color: #fff;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s ease;

  &:hover {
    background: #333;
  }
`;

const ContactSection = () => {
  return (
    <Section>
      <Card>
        <Title>오시는 길</Title>
        <Text>주소: 서울특별시 강남구 테헤란로 123 뷰티메디빌딩 5층</Text>
        <Text>연락처: 02-123-4567</Text>
        <Text>진료시간: 평일 10:00 - 19:00 / 토요일 10:00 - 16:00 / 일요일 및 공휴일 휴진</Text>
      </Card>
      <Card>
        <Title>상담 예약</Title>
        <Form>
          <Input type="text" placeholder="이름" />
          <Input type="text" placeholder="연락처" />
          <Select>
            <option>관심 시술을 선택하세요</option>
          </Select>
          <TextArea placeholder="상담 받고 싶은 내용을 자세히 적어주세요" />
          <Label>
            <input type="checkbox" /> 개인정보 수집 및 이용에 동의합니다.
          </Label>
          <SubmitButton type="submit">상담 예약하기</SubmitButton>
        </Form>
      </Card>
    </Section>
  );
};

export default ContactSection;
