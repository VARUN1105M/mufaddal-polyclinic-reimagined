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
import Therapist from '@/components/home/Therapist';
import Gaq from '@/components/home/Gaq';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Appointment />
        <Carosel />
        <Therapist />
        <Gaq />
        <TestimonialsSection />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
