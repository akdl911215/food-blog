import styled from 'styled-components';

const Section = styled.section`
  background: #5a5755;
  padding: 17rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #f4c430;
  font-size: 5rem;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  color: white;
  margin-top: 1.5rem;
  font-size: 1.25rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  background: transparent;
  border: 1px solid #f4c430;
  color: #f4c430;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #f4c430;
    color: #5a5755;
  }
`;

export default function Hero() {
  return (
    <Section>
      <Title>MAISON LUMIÈRE</Title>
      <Subtitle>고객의 기대를 넘는, 프리미엄 다이닝의 첫인상</Subtitle>
      <Button>예약하기</Button>
    </Section>
  );
}