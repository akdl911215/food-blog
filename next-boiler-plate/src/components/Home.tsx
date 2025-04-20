"use client";

import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import SectionToday from "./SectionToday";
import SectionPosts from "./SectionPosts";
import SubscribeSection from "./SubscribeSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionToday />
      <SectionPosts />
      <SubscribeSection />
      <Footer />
    </>
  );
}
