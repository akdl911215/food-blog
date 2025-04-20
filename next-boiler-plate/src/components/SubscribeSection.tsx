import styled from "styled-components";

const Section = styled.section`
  background-color: #fff6eb;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 280px;
  max-width: 100%;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #f26522;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #d8561f;
  }
`;

export default function SubscribeSection() {
  return (
    <Section>
      <Title>맛집 소식 받아보기</Title>
      <Subtitle>새로운 맛집 리뷰와 요리 레시피를 이메일로 받아보세요</Subtitle>
      <Form>
        <Input placeholder="이메일 주소" />
        <Button>구독하기</Button>
      </Form>
    </Section>
  );
}
