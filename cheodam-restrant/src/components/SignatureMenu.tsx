import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #111;
`;

const Title = styled.h2`
  text-align: center;
  color: #f4c430;
  margin-bottom: 2rem;
`;

export default function SignatureMenu() {
  return (
    <Section>
      <Title>SIGNATURE MENU</Title>
      {/* Add menu cards here */}
    </Section>
  );
}