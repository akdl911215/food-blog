import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const Section = styled.section`
  padding: 6rem 2rem;
  background: #f8f5f0;
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
  text-align: left;
`;

const Stars = styled.div`
  color: #c49a6c;
  margin-bottom: 1rem;
`;

const Review = styled.p`
  font-style: italic;
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const Info = styled.div`
  font-size: 0.85rem;
  line-height: 1.2;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Role = styled.div`
  color: #888;
`;

const Testimonials = () => {
  const testimonials = [
    {
      name: "김서연",
      role: "비즈니스 여행객",
      review:
        "비즈니스 미팅을 위해 방문했는데, 직원분들의 세심한 서비스와 편안한 객실 덕분에 성공적인 미팅을 마칠 수 있었습니다. 특히 조식 퀄리티가 정말 훌륭했습니다.",
      image: "/images/people1.png",
    },
    {
      name: "박준호",
      role: "허니문 커플",
      review:
        "신혼여행으로 방문했는데, 스페셜 패키지로 준비해주신 샴페인과 꽃다발이 정말 감동이었습니다. 스파 트리트먼트도 최고였고, 다음 기념일에도 꼭 방문하고 싶습니다.",
      image: "/images/people2.png",
    },
    {
      name: "이민지",
      role: "럭셔리 트래블러",
      review:
        "전 세계 럭셔리 호텔을 다녀봤지만, 럭스 서울의 서비스는 단연 최고입니다. 객실의 디테일한 부분까지 신경 쓴 흔적이 보였고, 컨시어지 서비스가 특히 인상적이었습니다.",
      image: "/images/people3.png",
    },
  ];

  return (
    <Section>
      <Title>고객의 소리</Title>
      <Description>
        럭스 서울을 경험한 고객님들의 진심 어린 후기입니다. 고객님의 만족이
        저희의 가장 큰 보람입니다.
      </Description>
      <Grid>
        {testimonials.map((item, index) => (
          <Card key={index}>
            <Stars>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </Stars>
            <Review>“{item.review}”</Review>
            <Reviewer>
              <Avatar src={item.image} alt={item.name} />
              <Info>
                <Name>{item.name}</Name>
                <Role>{item.role}</Role>
              </Info>
            </Reviewer>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Testimonials;
