import styled from "styled-components";
import {
  FaUtensils,
  FaHeart,
  FaDumbbell,
  FaWifi,
  FaMugHot,
  FaCar,
} from "react-icons/fa";

const Section = styled.section`
  background: #faf7f2;
  padding: 6rem 2rem;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #d2b48c;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ServiceDesc = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Services = () => {
  const serviceItems = [
    {
      icon: <FaUtensils />,
      title: "미쉐린 스타 레스토랑",
      description: "세계적인 셰프가 선보이는 최고의 다이닝 경험",
    },
    {
      icon: <FaHeart />,
      title: "럭셔리 스파",
      description: "프리미엄 트리트먼트로 완벽한 휴식을 선사합니다",
    },
    {
      icon: <FaDumbbell />,
      title: "피트니스 센터",
      description: "최신 장비를 갖춘 24시간 이용 가능한 피트니스",
    },
    {
      icon: <FaWifi />,
      title: "초고속 와이파이",
      description: "전 객실 및 공용공간 무료 초고속 인터넷 제공",
    },
    {
      icon: <FaMugHot />,
      title: "라운지 & 바",
      description: "프리미엄 음료와 함께하는 여유로운 시간",
    },
    {
      icon: <FaCar />,
      title: "발렛 파킹",
      description: "편리한 발렛 서비스로 여행의 시작과 끝을 완벽하게",
    },
  ];

  return (
    <Section>
      <Title>특별한 서비스</Title>
      <Description>
        럭스 서울은 고객님의 완벽한 경험을 위해 다양한 프리미엄 서비스를
        제공합니다. 세심한 배려가 담긴 서비스로 잊지 못할 추억을 만들어
        드립니다.
      </Description>
      <Grid>
        {serviceItems.map((item, index) => (
          <Card key={index}>
            <IconWrapper>{item.icon}</IconWrapper>
            <ServiceTitle>{item.title}</ServiceTitle>
            <ServiceDesc>{item.description}</ServiceDesc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
