import Hero from "@/components/Hero";
import ReservationForm from "@/components/ReservationForm";
import Features from "@/components/Features";
import PopularCars from "@/components/PopularCars";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <ReservationForm />
      <Features />
      <PopularCars />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}
