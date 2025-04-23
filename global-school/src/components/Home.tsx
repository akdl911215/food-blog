import Hero from '@/components/Hero';
import ServiceIcons from '@/components/ServiceIcons';
import WhatWeDo from '@/components/WhatWeDo';
import Steps from '@/components/Steps';
import DocumentGuide from '@/components/DocumentGuide';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

const Wrapper = styled.div`
  font-family: 'Pretendard', sans-serif;
  background: #f9f9f9;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Hero />
        <ServiceIcons />
        <WhatWeDo />
        <Steps />
        <DocumentGuide />
      </Wrapper>
    </ThemeProvider>
  );
}
