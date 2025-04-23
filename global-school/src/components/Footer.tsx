import styled from 'styled-components';

const Container = styled.footer`
  padding: 2rem;
  background: #222;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <Container>
      &copy; {new Date().getFullYear()} 공식번역센터. All rights reserved.
    </Container>
  );
}