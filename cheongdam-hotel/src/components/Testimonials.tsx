import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #111;
  color: #eee;
  text-align: center;
`;

const Title = styled.h2`
  color: #f4c430;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 2rem;
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Name = styled.p`
  font-weight: bold;
  margin-top: 1rem;
  color: #f4c430;
`;

export default function Testimonials() {
  return (
    <Section>
      <Title>고객의 소리</Title>
      <Grid>
        <Card>
          "비즈니스 미팅을 위해 방문했는데, 서비스와 객실 모두 완벽했습니다. 다음에도 꼭 방문할 예정입니다."
          <Name>김서연 · 비즈니스 여행객</Name>
        </Card>
        <Card>
          "허니문으로 왔는데, 로맨틱한 분위기와 스파 서비스가 최고였어요."
          <Name>박준호 · 허니문 커플</Name>
        </Card>
        <Card>
          "객실 디테일, 조식, 발렛파킹까지 감동적이었습니다."
          <Name>이미지 · 럭셔리 트래블러</Name>
        </Card>
      </Grid>
    </Section>
  );
}
