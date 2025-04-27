"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background: #f9fafb;
  padding: 3rem 2rem 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Title = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 0.875rem;
  color: #666;
  line-height: 1.5;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #444;
    font-size: 0.875rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #444;
`;

const Divider = styled.div`
  border-top: 1px solid #e5e5e5;
  margin: 2rem 0 1rem;
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  text-align: center;
  color: #999;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Grid>
        <Column>
          <Image
            src="/logo.png"
            alt="뷰티메디 로고"
            width={40}
            height={40}
            style={{
              borderRadius: "50%",
              backgroundColor: "#eee",
              objectFit: "cover",
            }}
          />
          <Title>뷰티메디</Title>
          <Text>
            뷰티메디는 고객 한 분 한 분의 아름다움을 위해 최선을 다하는
            성형외과입니다. <br />
            안전하고 만족스러운 결과로 새로운 자신감을 선사합니다.
          </Text>
        </Column>

        <Column>
          <Title>바로가기</Title>
          <List>
            <ListItem>
              <Link href="/">홈</Link>
            </ListItem>
            <ListItem>
              <Link href="#features">시술안내</Link>
            </ListItem>
            <ListItem>
              <Link href="#doctors">의료진</Link>
            </ListItem>
            <ListItem>
              <Link href="#reviews">고객후기</Link>
            </ListItem>
            <ListItem>
              <Link href="#contact">오시는길</Link>
            </ListItem>
          </List>
        </Column>

        <Column>
          <Title>시술 정보</Title>
          <List>
            <ListItem>눈 성형</ListItem>
            <ListItem>코 성형</ListItem>
            <ListItem>안면 윤곽</ListItem>
            <ListItem>지방 이식</ListItem>
            <ListItem>보톡스 & 필러</ListItem>
          </List>
        </Column>

        <Column>
          <Title>연락처</Title>
          <ContactItem>
            <FaPhoneAlt size={14} /> 02-123-4567
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt size={14} /> 서울특별시 강남구 테헤란로 123
          </ContactItem>
          <ContactItem>
            <FaClock size={14} /> 평일 10:00 - 19:00
          </ContactItem>
        </Column>
      </Grid>

      <Divider />
      <Copyright>© 2025 뷰티메디 성형외과. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
