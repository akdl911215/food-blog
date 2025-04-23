import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 2rem;
  background: #f4f6f8;
`;

export default function Steps() {
  return (
    <Section>
      <h2>신속한 원데이 서비스</h2>
      <ol>
        <li>서류 준비</li>
        <li>상담 및 안내</li>
        <li>접수 진행</li>
        <li>번역 / 인증 처리</li>
        <li>문서 수령</li>
      </ol>
    </Section>
  );
}