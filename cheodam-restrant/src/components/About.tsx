import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #000;
  text-align: center;
`;

const Title = styled.h2`
  color: #f4c430;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background: #f4c430;
  margin: 1rem auto 2rem;
`;

const Paragraph = styled.p`
  color: #ddd;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.8;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  max-width: 240px;
  text-align: center;
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #f4c430;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #f4c430 30%, #000 30%);
`;

const FeatureTitle = styled.h3`
  color: #f4c430;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
`;

const FeatureDesc = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export default function About() {
  return (
    <Section>
      <Title>ABOUT US</Title>
      <Divider />
      <Paragraph>
        메종 루미에르는 청담동의 중심부에 위치한 프리미엄 파인 다이닝 레스토랑입니다. 최고급 식자재와
        혁신적인 조리법으로 미식의 경계를 넘어서고, 큐레이션된 와인 셀렉션과 함께 잊지 못할 미식 여행을 제공합니다.
      </Paragraph>
      <Grid>
        <Feature>
          <IconCircle />
          <FeatureTitle>최고의 식자재</FeatureTitle>
          <FeatureDesc>국내외 최고 품질의 재철 식자재만을 엄선하여 사용합니다.</FeatureDesc>
        </Feature>
        <Feature>
          <IconCircle />
          <FeatureTitle>장인정신</FeatureTitle>
          <FeatureDesc>수십 년의 경험을 가진 셰프들이 정성을 다해 요리합니다.</FeatureDesc>
        </Feature>
        <Feature>
          <IconCircle />
          <FeatureTitle>특별한 경험</FeatureTitle>
          <FeatureDesc>모든 감각을 만족시키는 완벽한 다이닝 경험을 제공합니다.</FeatureDesc>
        </Feature>
      </Grid>
    </Section>
  );
}