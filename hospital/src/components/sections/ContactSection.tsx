"use client";
import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import Image from "next/image";

const Section = styled.section`
  display: grid;
  gap: 2rem;
  padding: 2.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;

  svg {
    color: #111;
    margin-top: 0.2rem;
  }

  p {
    font-size: 0.9rem;
    color: #333;
  }
`;

const MapImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
  background: #f3f4f6;
  height: 300px;
  position: relative;
`;

const Right = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
  resize: none;
  height: 8rem;
`;

const CheckboxWrapper = styled.label`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #111;
  color: #fff;
  padding: 0.9rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s ease;

  &:hover {
    background: #333;
  }
`;

const ContactSection = () => {
  return (
    <Section>
      <Left>
        <InfoCard>
          <Title>오시는 길</Title>
          <InfoItem>
            <FaMapMarkerAlt size={16} />
            <p>서울특별시 강남구 테헤란로 123 뷰티메디빌딩 5층</p>
          </InfoItem>
          <InfoItem>
            <FaPhoneAlt size={16} />
            <p>02-123-4567</p>
          </InfoItem>
          <InfoItem>
            <FaClock size={16} />
            <p>
              평일 10:00 - 19:00
              <br />
              토요일 10:00 - 16:00
              <br />
              일요일 및 공휴일 휴진
            </p>
          </InfoItem>
        </InfoCard>

        <MapImageWrapper>
          <Image
            src="/map.png" // public/assets/map.png 경로에 위치
            alt="오시는 길 지도"
            fill
            style={{ objectFit: "cover" }}
          />
        </MapImageWrapper>
      </Left>

      <Right>
        <Title>상담 예약</Title>
        <Form>
          <FlexRow>
            <Input type="text" placeholder="이름을 입력하세요" />
            <Input type="text" placeholder="연락처를 입력하세요" />
          </FlexRow>
          <Select>
            <option>관심 시술을 선택하세요</option>
            <option>눈 성형</option>
            <option>코 성형</option>
            <option>안면 윤곽</option>
            <option>지방 이식</option>
            <option>보톡스 & 필러</option>
            <option>리프팅</option>
          </Select>
          <TextArea placeholder="상담 받고 싶은 내용을 자세히 적어주세요" />
          <CheckboxWrapper>
            <input type="checkbox" />
            개인정보 수집 및 이용에 동의합니다.
          </CheckboxWrapper>
          <SubmitButton type="submit">상담 예약하기</SubmitButton>
        </Form>
      </Right>
    </Section>
  );
};

export default ContactSection;
