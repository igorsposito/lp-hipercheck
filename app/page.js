import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'; // <--- Importou o Footer

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <SolutionsSection />
      <ContactSection />
      <Footer /> {/* <--- Encaixou no final */}
    </main>
  );
}