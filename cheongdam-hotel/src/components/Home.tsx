import Header from './Header';
import Hero from './Hero';
import About from './About';
import Rooms from './Rooms';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

const Wrapper = styled.div`
  font-family: 'Noto Serif KR', serif;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}