"use client";
import React from "react";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa"; // 화살표 아이콘 사용
import Image from "next/image";

const Section = styled.section`
  padding: 5rem 2.5rem;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #f9fafb;
  border-radius: 1rem;
  overflow: hidden;
  text-align: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
`;

const ImagePlaceholder = styled.div`
  background: #f3f4f6;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h4`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #666666;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #111;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const procedures = [
  {
    title: "눈 성형",
    description: "자연스러운 쌍꺼풀, 눈매 교정 등 다양한 눈 성형 시술",
    image: "/eye-surgery.png",
  },
  {
    title: "코 성형",
    description: "얼굴 비율에 맞는 자연스러운 코 라인 형성",
    image: "/nose-surgery.png",
  },
  {
    title: "안면 윤곽",
    description: "V라인, 광대 축소 등 조화로운 얼굴형 디자인",
    image: "/face-contour.png",
  },
  {
    title: "지방 이식",
    description: "자가 지방을 이용한 자연스러운 볼륨 회복",
    image: "/fat-graft.png",
  },
  {
    title: "보톡스 & 필러",
    description: "주름 개선 및 입체적인 얼굴 라인 형성",
    image: "/botox-filler.png",
  },
  {
    title: "리프팅",
    description: "처짐 없는 탄력 있는 피부를 위한 다양한 리프팅 시술",
    image: "/lifting.png",
  },
];

const ProceduresSection = () => {
  return (
    <Section>
      <Wrapper>
        <Title>주요 시술 안내</Title>
        <Subtitle>
          뷰티메디는 다양한 성형 시술을 통해 고객님의 아름다움을 극대화합니다.
          각 시술은 개인의 특성에 맞게 맞춤형으로 진행됩니다.
        </Subtitle>
        <Grid>
          {procedures.map((proc, index) => (
            <Card key={index}>
              <Image
                src={proc.image}
                alt={proc.title}
                width={400}
                height={250}
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
                priority={index === 0} // 첫 번째 이미지만 priority 로딩
              />
              <CardContent>
                <CardTitle>{proc.title}</CardTitle>
                <Description>{proc.description}</Description>
                <LinkButton href="#">
                  자세히 보기 <FaChevronRight size="0.8em" />
                </LinkButton>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
};

export default ProceduresSection;
