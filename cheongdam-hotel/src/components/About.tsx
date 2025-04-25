import styled from 'styled-components';
import LobbyImage from '@/assets/images/lobby.png';
import Image from 'next/image';

const Section = styled.section`
  display: flex;
  padding: 6rem 2rem;
  justify-content: space-between;
  background: #f8f5f0;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Heading = styled.h3`
  font-size: 2rem;
  font-family: 'Noto Serif KR', serif;
  font-weight: 600;
  color: #111;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
`;

const Since = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #c89c5d;
  font-family: 'Noto Serif KR', serif;

  &::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 1px;
    background: #c89c5d;
    margin-right: 1rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  height: auto;
`;

const About = () => (
  <Section>
    <Content>
      <Heading>청담동의 새로운 랜드마크</Heading>
      <Text>럭스 서울은 청담동의 중심부에 위치한 부티크 호텔로, 세련된 디자인과 최상의 서비스를 제공합니다. 도심 속 휴식을 원하는 고객님들을 위해 특별히 디자인된 공간에서 잊지 못할 경험을 선사합니다.</Text>
      <Text>최고급 침구와 어메니티, 맞춤형 서비스로 고객 한 분 한 분의 기대를 뛰어넘는 경험을 약속드립니다. 럭스 서울에서만 느낄 수 있는 특별한 순간을 경험해보세요.</Text>
      <Since>SINCE 2023</Since>
    </Content>
    <ImageWrapper>
      <Image
        src={LobbyImage}
        alt="럭스 서울 로비"
        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
      />
    </ImageWrapper>
  </Section>
);

export default About;
