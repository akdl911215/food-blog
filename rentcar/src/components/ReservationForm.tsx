"use client";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #fafafa;
  width: 100%;
  max-width: 840px;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
`;

const TabWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  background: ${({ active }) => (active ? "#fff" : "#e5e7eb")};
  color: ${({ active }) => (active ? "#000" : "#888")};
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #ccc;
  border-right: none;

  &:last-child {
    border-right: 1px solid #ccc;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export default function ReservationForm() {
  const [activeTab, setActiveTab] = useState<"rent" | "return">("rent");

  return (
    <Wrapper>
      <Title>간편한 예약</Title>
      <Subtitle>원하는 차량을 쉽고 빠르게 예약하세요</Subtitle>

      <Card>
        <TabWrapper>
          <Tab active={activeTab === "rent"} onClick={() => setActiveTab("rent")}>
            렌트
          </Tab>
          <Tab active={activeTab === "return"} onClick={() => setActiveTab("return")}>
            반납
          </Tab>
        </TabWrapper>

        <Grid>
          <FieldGroup>
            <Label>대여 장소</Label>
            <Select defaultValue="">
              <option value="" disabled hidden>대여 장소 선택</option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
            </Select>
          </FieldGroup>

          <FieldGroup>
            <Label>반납 장소</Label>
            <Select defaultValue="">
              <option value="" disabled hidden>반납 장소 선택</option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
            </Select>
          </FieldGroup>

          <FieldGroup>
            <Label>대여 날짜</Label>
            <Input type="date" />
          </FieldGroup>

          <FieldGroup>
            <Label>반납 날짜</Label>
            <Input type="date" />
          </FieldGroup>

          <FieldGroup>
            <Label>차량 유형</Label>
            <Select defaultValue="">
              <option value="" disabled hidden>차량 유형 선택</option>
              <option>소형</option>
              <option>중형</option>
              <option>SUV</option>
            </Select>
          </FieldGroup>

          <div style={{ alignSelf: "flex-end" }}>
            <SubmitButton type="submit">차량 검색</SubmitButton>
          </div>
        </Grid>
      </Card>
    </Wrapper>
  );
}
