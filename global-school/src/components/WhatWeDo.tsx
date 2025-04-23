import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const Item = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export default function WhatWeDo() {
  return (
    <Section>
      <h2>WHAT WE DO</h2>
      <Grid>
        <Item>공증번역</Item>
        <Item>아포스티유</Item>
        <Item>대사관인증</Item>
        <Item>비자서류</Item>
        <Item>국제학교 입학서류</Item>
        <Item>외국인서류</Item>
      </Grid>
    </Section>
  );
}