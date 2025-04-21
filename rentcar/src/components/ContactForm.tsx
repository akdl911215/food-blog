"use client";
import styled from "styled-components";
import { FiPhone, FiMapPin } from "react-icons/fi";

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fb;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const InfoBox = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  background: #e9eefe;
  color: #4f5fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.25rem;
  margin-right: 1rem;
`;

const InfoText = styled.div`
  & strong {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
  color: #333;
`;

const Form = styled.form`
  flex: 1;
  min-width: 280px;
  display: grid;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 100px;
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
  padding: 0.75rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;

export default function ContactForm() {
  return (
    <Section>
      <Wrapper>
        <InfoBox>
          <Title>지금 바로 문의하세요</Title>
          <Subtitle>
            궁금한 점이 있으시면 언제든지 문의해 주세요. 전문 상담원이 신속하게 답변해 드립니다.
          </Subtitle>
          <InfoItem>
            <IconCircle>
              <FiPhone />
            </IconCircle>
            <InfoText>
              <strong>전화 문의</strong>
              1588-1234
            </InfoText>
          </InfoItem>
          <InfoItem>
            <IconCircle>
              <FiMapPin />
            </IconCircle>
            <InfoText>
              <strong>본사 위치</strong>
              서울특별시 강남구 테헤란로 123
            </InfoText>
          </InfoItem>
        </InfoBox>
        <Form>
          <Row>
            <Input type="text" placeholder="이름을 입력하세요" />
            <Input type="text" placeholder="연락처를 입력하세요" />
          </Row>
          <Input type="email" placeholder="이메일을 입력하세요" />
          <TextArea placeholder="문의 내용을 입력하세요" />
          <Button>문의하기</Button>
        </Form>
      </Wrapper>
    </Section>
  );
}