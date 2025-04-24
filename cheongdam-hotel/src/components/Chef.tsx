import styled from 'styled-components';
import Image from 'next/image';
import chefImage from '@/assets/images/chef.png';

const Section = styled.section`
  padding: 6rem 2rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  background: #000;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
`;

const Content = styled.div`
  flex: 1;
  color: #ddd;
  padding-left: 1rem;
  min-width: 300px;
`;

const Title = styled.h2`
  color: #f4c430;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background: #f4c430;
  margin: 1rem 0;
`;

const Name = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: #ccc;
  margin-bottom: 1rem;
`;

const Attribution = styled.p`
  font-style: italic;
  color: #f4c430;
`;

export default function Chef() {
  return (
    <Section>
      <ImageWrapper>
        <Image src={chefImage} alt="Executive Chef" width={600} height={400} style={{ width: '100%', height: 'auto' ,maxHeight: '600px', objectFit: 'contain' }} />
      </ImageWrapper>
      <Content>
        <Title>EXECUTIVE CHEF</Title>
        <Divider />
        <Name>Julian Lambert</Name>
        <Paragraph>
          줄리앙 랑베르 셰프는 유럽 전역의 미쉐린 스타 레스토랑에서 20년 이상의 경력을 쌓아온 프렌치 셰프입니다. 계절 식재료에 대한 깊은 이해와 세련된 표현력으로 고급 다이닝의 정수를 선보이고 있습니다.
        </Paragraph>
        <Quote>
          "요리는 단순한 기술이 아닌, 기억과 감정을 담는 예술입니다. 저는 한 접시의 요리로 이야기를 전달합니다."
        </Quote>
        <Attribution>- 줄리앙 랑베르, 메종 루미에르 총괄 셰프</Attribution>
      </Content>
    </Section>
  );
}
