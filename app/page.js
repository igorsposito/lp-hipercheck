'use client';

import useScrollReveal from '../hooks/useScrollReveal';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <SolutionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}