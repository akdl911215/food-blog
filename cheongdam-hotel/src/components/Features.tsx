import styled from 'styled-components';
import { FaLeaf, FaStar, FaWineGlassAlt } from 'react-icons/fa';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #1a1a1a;
  text-align: center;
`;

const Title = styled.h2`
  color: #f4c430;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Feature = styled.div`
  background: #222;
  border-radius: 8px;
  padding: 2rem;
  flex: 1;
  min-width: 260px;
  max-width: 320px;
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #f4c430;
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.9rem;
  color: #aaa;
`;

export default function Features() {
  return (
    <Section>
      <Title>특별한 이유</Title>
      <Grid>
        <Feature>
          <Icon><FaStar /></Icon>
          <FeatureTitle>미쉐린 셰프</FeatureTitle>
          <FeatureDesc>세계가 인정한 스타 셰프의 요리를 경험하세요.</FeatureDesc>
        </Feature>
        <Feature>
          <Icon><FaWineGlassAlt /></Icon>
          <FeatureTitle>와인 셀렉션</FeatureTitle>
          <FeatureDesc>세계 각지에서 엄선한 프리미엄 와인을 즐기실 수 있습니다.</FeatureDesc>
        </Feature>
        <Feature>
          <Icon><FaLeaf /></Icon>
          <FeatureTitle>계절 식재료</FeatureTitle>
          <FeatureDesc>자연이 선사하는 최상의 제철 식자재만을 사용합니다.</FeatureDesc>
        </Feature>
      </Grid>
    </Section>
  );
}
