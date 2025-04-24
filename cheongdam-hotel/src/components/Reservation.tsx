import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: #111;
`;

const Title = styled.h2`
  color: #f4c430;
  font-size: 2rem;
  font-weight: bold;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background: #f4c430;
  margin: 1rem auto 2rem;
`;

const Description = styled.p`
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 2.5rem;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background: transparent;
  border: 1px solid #f4c430;
  color: #f4c430;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;

  &:hover {
    background: #f4c430;
    color: #111;
  }
`;

export default function Reservation() {
  return (
    <Section>
      <Title>RESERVATIONS</Title>
      <Divider />
      <Description>
        특별한 날을 위한 완벽한 선택, 메종 루미에르에서 잊지 못할 추억을 만들어보세요. <br />
        예약은 2주 전부터 가능하며, 프라이빗 다이닝도 준비되어 있습니다.
      </Description>
      <Button>지금 예약하기</Button>
    </Section>
  );
}
