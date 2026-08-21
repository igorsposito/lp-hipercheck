'use client';

import useScrollReveal from '../hooks/useScrollReveal';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <SolutionsSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}