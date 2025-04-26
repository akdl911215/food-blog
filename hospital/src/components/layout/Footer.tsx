'use client';

import Link from 'next/link';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #f9f9f9;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  font-size: 0.9rem;
`;

const Column = styled.div``;

const Title = styled.h4`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Column>
        <Title>뷰티메디</Title>
        <p>고객 한 분 한 분의 아름다움을 위해 최선을 다하는 성형외과입니다.</p>
      </Column>
      <Column>
        <Title>바로가기</Title>
        <List>
          <ListItem><Link href="/">홈</Link></ListItem>
          <ListItem><Link href="#features">시술안내</Link></ListItem>
          <ListItem><Link href="#doctors">의료진</Link></ListItem>
          <ListItem><Link href="#reviews">고객후기</Link></ListItem>
          <ListItem><Link href="#contact">오시는길</Link></ListItem>
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
        <p>02-123-4567</p>
        <p>서울특별시 강남구 테헤란로 123</p>
        <p>평일 10:00 - 19:00</p>
      </Column>
    </FooterWrapper>
  );
};

export default Footer;
