import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Section = styled.footer`
  background: #000;
  color: #ccc;
  padding: 4rem 2rem 2rem;
  font-size: 1.1rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Block = styled.div`
  flex: 1;
  min-width: 240px;
`;

const Label = styled.h4`
  color: #f4c430;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Line = styled.p`
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Bottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #777;
`;

const Links = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;

  a {
    color: #777;
    text-decoration: none;

    &:hover {
      color: #f4c430;
    }
  }
`;

export default function Footer() {
  return (
    <Section>
      <Grid>
        <Block>
          <Label>LOCATION</Label>
          <Line>
            <FaMapMarkerAlt />
            서울특별시 강남구 청담동 123-45
          </Line>
        </Block>
        <Block>
          <Label>CONTACT</Label>
          <Line>
            <FaPhoneAlt />
            02-1234-5678
          </Line>
          <Line>info@maisonlumiere.kr</Line>
        </Block>
        <Block>
          <Label>HOURS</Label>
          <Line>
            <FaClock />
            화-일: 17:30 - 23:00
          </Line>
          <Line>월요일 휴무</Line>
        </Block>
      </Grid>

      <Bottom>
        <div>© 2025 Maison Lumière. All rights reserved.</div>
        <Links>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </Links>
      </Bottom>
    </Section>
  );
}
