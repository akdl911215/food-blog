"use client";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fb;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-height: 150px;
`;

const Button = styled.button`
  background: #4f5fff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;

export default function ContactForm() {
  return (
    <Section>
      <Title>지금 바로 문의하세요</Title>
      <Form>
        <Input placeholder="이름" />
        <Input placeholder="이메일" />
        <TextArea placeholder="문의 내용" />
        <Button>문의하기</Button>
      </Form>
    </Section>
  );
}