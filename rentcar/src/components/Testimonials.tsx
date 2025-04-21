"use client";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  width: 320px;
  text-align: left;
`;

const Avatar = styled.div`
  background: #e5e8ff;
  color: #3f51b5;
  font-weight: bold;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-right: 0.75rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Location = styled.span`
  color: #777;
  font-size: 0.9rem;
`;

const Stars = styled.div`
  color: #f6c102;
  margin: 0.5rem 0;
`;

export default function Testimonials() {
  const testimonials = [
    {
      name: "김민수",
      location: "서울",
      initial: "K",
      rating: 5,
      text: "차량 상태가 매우 좋았고, 예약부터 반납까지 모든 과정이 매우 편리했습니다. 다음에도 꼭 이용할 예정입니다."
    },
    {
      name: "이지연",
      location: "부산",
      initial: "L",
      rating: 4,
      text: "가격 대비 서비스가 훌륭했습니다. 직원분들도 친절하고 차량도 깨끗했어요. 다만 반납 시간이 조금 더 유연했으면 좋겠어요."
    },
    {
      name: "박준호",
      location: "제주",
      initial: "P",
      rating: 5,
      text: "제주도 여행에 완벽한 선택이었습니다. 공항에서 바로 수령할 수 있어서 편리했고, 차량 상태도 매우 좋았습니다."
    }
  ];

  return (
    <Section>
      <Title>고객 후기</Title>
      <SubTitle>실제 고객들의 생생한 이용 후기를 확인하세요</SubTitle>
      <Grid>
        {testimonials.map((item, i) => (
          <Card key={i}>
            <Header>
              <Avatar>{item.initial}</Avatar>
              <UserInfo>
                <Name>{item.name}</Name>
                <Location>{item.location}</Location>
              </UserInfo>
            </Header>
            <Stars>
              {Array.from({ length: item.rating }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
              {Array.from({ length: 5 - item.rating }).map((_, idx) => (
                <FaStar key={idx} style={{ color: '#ccc' }} />
              ))}
            </Stars>
            <p>"{item.text}"</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}