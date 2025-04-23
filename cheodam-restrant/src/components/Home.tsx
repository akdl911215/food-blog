import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import SignatureMenu from '@/components/SignatureMenu';
import Chef from '@/components/Chef';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import Header from './Header';

const Wrapper = styled.div`
  background: #1a1a1a;
  color: #fff;
  font-family: 'Noto Serif KR', serif;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Hero />
        <About />
        <Features />
        <SignatureMenu />
        <Chef />
        <Reservation />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}