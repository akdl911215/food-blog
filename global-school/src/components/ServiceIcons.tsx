import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background: #eef2f7;
`;

const Item = styled.div`
  text-align: center;
  max-width: 200px;
`;

export default function ServiceIcons() {
  return (
    <Section>
      <Item>
        <h3>안전 보장</h3>
        <p>정기적인 점검을 거친 차량만 제공합니다.</p>
      </Item>
      <Item>
        <h3>투명한 가격</h3>
        <p>숨겨진 비용 없이 명확한 요금제 운영</p>
      </Item>
      <Item>
        <h3>24시간 지원</h3>
        <p>연중무휴 고객센터 운영</p>
      </Item>
    </Section>
  );
}