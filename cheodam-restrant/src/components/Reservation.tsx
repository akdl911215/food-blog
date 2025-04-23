import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #111;
`;

const Title = styled.h2`
  color: #f4c430;
`;

const Description = styled.p`
  color: #ccc;
`;

export default function Reservation() {
  return (
    <Section>
      <Title>RESERVATIONS</Title>
      <Description>
        잊지 못할 특별한 순간을 위한 예약, 지금 가능합니다.
      </Description>
    </Section>
  );
}