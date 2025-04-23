import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
`;

export default function DocumentGuide() {
  return (
    <Section>
      <h2>부모동의서 진행 안내</h2>
      <ul>
        <li>여권/항공권 확인</li>
        <li>요청 정보 작성</li>
        <li>부모동의서 준비</li>
        <li>문서 전달</li>
      </ul>
    </Section>
  );
}