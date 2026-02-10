import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import DoctorsPreview from '@/components/home/DoctorsPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import Appointment from '@/components/home/Appointmentsection';
import Carosel from '@/components/home/Carosel';
import Gaq from '@/components/home/Gaq';
import AnimatedSection from '@/components/ui/AnimatedSection';


const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden">
      <Navbar />
      <main className="relative w-full max-w-full overflow-x-hidden overflow-y-visible">
        <div className="relative z-10">
          <HeroSection />
        </div>

        <div className="relative z-20 bg-white">
          <AboutSection />
        </div>

        <div className="relative z-10">
          <ServicesSection />
        </div>

        <div className="relative z-20">
          <WhyChooseUs />
        </div>

        <div className="relative z-10 bg-white">
          <DoctorsPreview />
        </div>

        <div className="relative z-20">
          <Appointment />
        </div>

        <AnimatedSection className="relative z-10">
          <Carosel />
        </AnimatedSection>

        <AnimatedSection className="relative z-20">
          <Gaq />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 bg-white">
          <TestimonialsSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
