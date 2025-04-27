"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image"; // 추가

const Section = styled.section`
  padding: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

const InfoWrapper = styled.div`
  padding: 1.5rem;
`;

const Name = styled.h4`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const Specialty = styled.p`
  font-size: 0.875rem;
  color: #666666;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #444444;
  margin-bottom: 0.75rem;
`;

const ProfileLink = styled.a`
  display: inline-block;
  color: #0070f3;
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: #0050c3;
  }
`;

const doctors = [
  {
    name: "김민서 원장",
    specialty: "안면 윤곽 전문의",
    desc: "10년 이상의 풍부한 임상 경험으로 자연스러운 안면 윤곽 시술을 진행합니다.",
    image: "/doctors/kim-minseo.png",
  },
  {
    name: "이준호 원장",
    specialty: "눈 성형 전문의",
    desc: "섬세한 눈매 교정과 자연스러운 쌍꺼풀 수술로 많은 고객님들의 신뢰를 받고 있습니다.",
    image: "/doctors/lee-junho.png",
  },
  {
    name: "박소연 원장",
    specialty: "보톡스 & 필러 전문의",
    desc: "최신 트렌드와 기술을 접목한 보톡스 및 필러 시술로 자연스러운 아름다움을 선사합니다.",
    image: "/doctors/park-soyeon.png",
  },
];

const DoctorsSection = () => {
  return (
    <Section>
      <Title>전문 의료진 소개</Title>
      <Grid>
        {doctors.map((doc, i) => (
          <Card key={i}>
            <Image
              src={doc.image}
              alt={doc.name}
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
            <InfoWrapper>
              <Name>{doc.name}</Name>
              <Specialty>{doc.specialty}</Specialty>
              <Description>{doc.desc}</Description>
              <ProfileLink href="#">프로필 보기</ProfileLink>
            </InfoWrapper>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default DoctorsSection;
