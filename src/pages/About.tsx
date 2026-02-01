import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Therapist from '@/components/home/Therapist';
import Carosel from '@/components/home/Carosel';
import FAQSection from '@/components/home/Faq';
import AboutSection from '@/components/home/Aboutpage';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutSection/>
        <WhyChooseUs/>
        <Therapist/>
        <FAQSection/>
        <Carosel/>
      </main>
      <Footer />
    </div>
  );
};

export default About;