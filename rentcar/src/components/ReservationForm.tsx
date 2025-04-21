"use client";
import styled from "styled-components";

const FormSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Form = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
`;

export default function ReservationForm() {
  return (
    <FormSection>
      <Title>간편한 예약</Title>
      <SubTitle>원하는 차량을 쉽고 빠르게 예약하세요</SubTitle>
      <Form>
        {/* Form inputs can go here */}
      </Form>
    </FormSection>
  );
}