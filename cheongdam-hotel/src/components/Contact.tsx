import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #f5f1ec;
  color: #333;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const Info = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Line = styled.p`
  margin: 0.5rem 0;
  font-size: 0.95rem;
`;

const Form = styled.form`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 120px;
`;

const Button = styled.button`
  background: #f4c430;
  color: #111;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

export default function Contact() {
  return (
    <Section>
      <Info>
        <Title>연락처 & 예약</Title>
        <Line>서울특별시 강남구 청담동 123-45</Line>
        <Line>전화: 02-1234-5678</Line>
        <Line>이메일: reservation@luxeseoul.com</Line>
        <Line>체크인: 오후 3시 / 체크아웃: 정오</Line>
      </Info>
      <Form>
        <Input type="text" placeholder="성함" />
        <Input type="email" placeholder="이메일" />
        <Input type="text" placeholder="제목" />
        <TextArea placeholder="문의 내용을 입력해주세요" />
        <Button>문의하기</Button>
      </Form>
    </Section>
  );
}
