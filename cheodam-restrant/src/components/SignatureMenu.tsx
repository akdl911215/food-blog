import styled from 'styled-components';
import Image from 'next/image';
import rigottoImage from '@/assets/images/rigotto.png';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #111;
`;

const Title = styled.h2`
  text-align: center;
  color: #f4c430;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background: #f4c430;
  margin: 0 auto 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: linear-gradient(to bottom, #ccc, #111);
  border-radius: 8px;
  padding: 1.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 250px;
`;

const DishTitle = styled.h3`
  color: #f4c430;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #ccc;
  font-size: 0.9rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid #f4c430;
  color: #f4c430;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #f4c430;
    color: #111;
  }
`;

export default function SignatureMenu() {
  return (
    <Section>
      <Title>SIGNATURE MENU</Title>
      <Divider />
      <Grid>
        <Card>
          <Image
            src={rigottoImage}
            alt="트러플 리조또"
            style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center 60%', borderRadius: '8px 8px 0 0' }}
          />


          <DishTitle>트러플 리조또</DishTitle>
          <Description>최고급 계절 트러플과 파르메산 치즈의 조화</Description>
        </Card>
        <Card>
          <DishTitle>한우 안심 스테이크</DishTitle>
          <Description>최상급 한우와 특제 소스의 완벽한 만남</Description>
        </Card>
        <Card>
          <DishTitle>랍스터 비스크</DishTitle>
          <Description>신선한 랍스터로 48시간 정성껏 끓여낸 깊은 풍미</Description>
        </Card>
        <Card>
          <DishTitle>시그니처 디저트</DishTitle>
          <Description>금박을 입힌 초콜릿 무스와 계절 과일</Description>
        </Card>
      </Grid>
      <ButtonWrapper>
        <Button>전체 메뉴 보기</Button>
      </ButtonWrapper>
    </Section>
  );
}