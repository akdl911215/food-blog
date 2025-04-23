import styled from 'styled-components';
import Image from 'next/image';
import headerImg from '@/public/header.png';

const Container = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
`;

export default function Header() {
  return (
    <Container>
      <Image src={headerImg} alt="Header banner" layout="responsive" />
    </Container>
  );
}