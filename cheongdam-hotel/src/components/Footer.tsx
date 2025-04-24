// src/components/layout/Footer.tsx
import styled from 'styled-components';

const Container = styled.footer`
  background: #000;
  color: #777;
  padding: 3rem 2rem;
  font-size: 0.85rem;
  border-top: 1px solid #333;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const Block = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Label = styled.h4`
  color: #f4c430;
  margin-bottom: 0.75rem;
`;

const Copy = styled.div`
  border-top: 1px solid #333;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Footer() {
  return (
    <Container>
      <Grid>
        <Block>
          <Label>LOCATION</Label>
          서울특별시 강남구 청담동 123-45
        </Block>
        <Block>
          <Label>CONTACT</Label>
          02-1234-5678<br />
          info@luxe-seoul.kr
        </Block>
        <Block>
          <Label>HOURS</Label>
          화~일: 17:30~23:00<br />
          월요일 휴무
        </Block>
      </Grid>
      <Copy>
        <div>© 2025 LUXE SEOUL. All rights reserved.</div>
        <div>Instagram · Facebook · Privacy · Terms</div>
      </Copy>
    </Container>
  );
}
