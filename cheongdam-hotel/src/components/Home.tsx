import styled from 'styled-components';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import SignatureMenu from './SignatureMenu';
import Chef from './Chef';
import Reservation from './Reservation';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Wrapper = styled.div`
  background: #111;
  color: #fff;
  font-family: 'Noto Serif KR', serif;
`;

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <About />
      <Features />
      <SignatureMenu />
      <Chef />
      <Reservation />
      <Testimonials />
      <Contact />
      <Footer />
    </Wrapper>
  );
}
