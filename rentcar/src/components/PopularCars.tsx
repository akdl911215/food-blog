"use client";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding: 1rem;
`;

const CarName = styled.h4`
  margin: 1rem 0 0.25rem;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

export default function PopularCars() {
  const cars = [
    { name: "아반떼", type: "소형", price: "50,000", rating: "4.8" },
    { name: "쏘나타", type: "중형", price: "70,000", rating: "4.7" },
    { name: "투싼", type: "SUV", price: "90,000", rating: "4.9" },
  ];

  return (
    <Section>
      <Title>인기 차량</Title>
      <Grid>
        {cars.map((car, i) => (
          <Card key={i}>
            <div style={{ height: "160px", background: "#eee" }}></div>
            <CarName>{car.name}</CarName>
            <div>🚗 {car.type} / ⭐ {car.rating}</div>
            <Price>₩{car.price}/일</Price>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}