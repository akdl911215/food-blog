import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  background: #000;
`;

const Content = styled.div`
  color: #ddd;
  padding-left: 2rem;
`;

const Title = styled.h2`
  color: #f4c430;
`;

export default function Chef() {
  return (
    <Section>
      <Content>
        <Title>EXECUTIVE CHEF</Title>
        <p>김준호 셰프 – 국내외에서 극찬 받은 정통 프렌치 셰프</p>
      </Content>
    </Section>
  );
}