import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #000;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const Feature = styled.div`
  max-width: 200px;
`;

const Title = styled.h3`
  color: #f4c430;
  margin-top: 1rem;
`;

const Desc = styled.p`
  color: #ccc;
`;

export default function Features() {
  return (
    <Section>
      <Feature>
        <Title>최고의 식자재</Title>
        <Desc>국내외 고품질의 재철 재료를 사용합니다.</Desc>
      </Feature>
      <Feature>
        <Title>장인정신</Title>
        <Desc>경험 많은 셰프의 정성이 담긴 요리</Desc>
      </Feature>
      <Feature>
        <Title>특별한 경험</Title>
        <Desc>모든 감각을 만족시키는 미식 여행</Desc>
      </Feature>
    </Section>
  );
}