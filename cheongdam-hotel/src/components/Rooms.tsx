import styled from "styled-components";
import Image from "next/image";
import panorama from "@/assets/images/panorama.png";
import sweetroom from "@/assets/images/sweetroom.png";
import royal from "@/assets/images/royal.png";

const Section = styled.section`
  padding: 6rem 2rem;
  background: #f4f1ea;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  font-family: "Noto Serif KR", serif;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 720px;
  margin: 0 auto 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

const RoomName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const RoomDesc = styled.p`
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 1rem;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Link = styled.a`
  font-size: 0.9rem;
  color: #c2a064;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background: #c2a064;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const Rooms = () => (
  <Section>
    <Title>품격 있는 객실</Title>
    <Subtitle>
      럭스 서울의 모든 객실은 고객님의 완벽한 휴식을 위해 세심하게
      디자인되었습니다. 최고급 침구와 어메니티로 집보다 편안한 휴식을
      경험하세요.
    </Subtitle>
    <Grid>
      <Card>
        <StyledImage src={panorama} alt="디럭스 스위트" />
        <Content>
          <RoomName>디럭스 스위트</RoomName>
          <RoomDesc>
            도시의 파노라마 전망과 함께하는 70㎡ 규모의 럭셔리 스위트
          </RoomDesc>
          <PriceRow>
            <Price>₩550,000~</Price>
            <Link href="#">자세히 보기</Link>
          </PriceRow>
        </Content>
      </Card>
      <Card>
        <StyledImage src={sweetroom} alt="프레지덴셜 스위트" />
        <Content>
          <RoomName>프레지덴셜 스위트</RoomName>
          <RoomDesc>최상의 휴식을 위한 120㎡ 규모의 프리미엄 스위트</RoomDesc>
          <PriceRow>
            <Price>₩950,000~</Price>
            <Link href="#">자세히 보기</Link>
          </PriceRow>
        </Content>
      </Card>
      <Card>
        <StyledImage src={royal} alt="로얄 펜트하우스" />
        <Content>
          <RoomName>로얄 펜트하우스</RoomName>
          <RoomDesc>
            청담동의 스카이라인을 감상할 수 있는 200㎡ 규모의 펜트하우스
          </RoomDesc>
          <PriceRow>
            <Price>₩1,850,000~</Price>
            <Link href="#">자세히 보기</Link>
          </PriceRow>
        </Content>
      </Card>
    </Grid>
    <ButtonWrapper>
      <Button>모든 객실 보기</Button>
    </ButtonWrapper>
  </Section>
);

export default Rooms;
