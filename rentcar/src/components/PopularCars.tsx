"use client";
import styled from "styled-components";
import Image from "next/image";

import avanteImg from "@/assets/images/avante.jpg";
import sonataImg from "@/assets/images/sonata.webp";
import tucsonImg from "@/assets/images/tucson.jpeg";

const Section = styled.section`
  padding: 5rem 2rem;
  background: #fff;
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #f9fafc;
  border-radius: 12px;
  overflow: hidden;
  width: 280px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: #e8ebf3;
`;

const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #2563eb;
  color: white;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
`;

const Info = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const NameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h3`
  font-weight: 600;
`;

const Star = styled.span`
  color: #2563eb;
  font-weight: 500;
  font-size: 0.9rem;
`;

const Meta = styled.div`
  color: #555;
  font-size: 0.875rem;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
`;

const ViewAll = styled.button`
  margin-top: 2.5rem;
  background: white;
  border: 1px solid #ccc;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

export default function PopularCars() {
  const cars = [
    {
      name: "아반떼",
      type: "소형",
      seats: 5,
      rating: 4.8,
      price: "50,000",
      img: avanteImg,
    },
    {
      name: "쏘나타",
      type: "중형",
      seats: 5,
      rating: 4.7,
      price: "70,000",
      img: sonataImg,
    },
    {
      name: "투싼",
      type: "SUV",
      seats: 5,
      rating: 4.9,
      price: "90,000",
      img: tucsonImg,
    },
  ];

  return (
    <Section>
      <Title>인기 차량</Title>
      <SubTitle>고객들이 가장 많이 선택한 인기 차량을 만나보세요</SubTitle>
      <Grid>
        {cars.map((car, i) => (
          <Card key={i}>
            <ImageBox>
              <Image src={car.img} alt={car.name} fill style={{ objectFit: "cover" }} />
              <Badge>인기</Badge>
            </ImageBox>
            <Info>
              <NameRow>
                <Name>{car.name}</Name>
                <Star>⭐ {car.rating}</Star>
              </NameRow>
              <Meta>👤 {car.seats}인승 · 🚘 {car.type}</Meta>
              <PriceRow>
                <Price>₩{car.price}/일</Price>
                <Button>예약하기</Button>
              </PriceRow>
            </Info>
          </Card>
        ))}
      </Grid>
      <ButtonWrapper>
        <ViewAll>모든 차량 보기</ViewAll>
      </ButtonWrapper>

    </Section>
  );
}
