import { Link } from 'react-router-dom';
import { Stethoscope, Pill, Users, Dumbbell, HeartPulse, Thermometer, Eye, Ear } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const services = [
  {
    icon: Stethoscope,
    title: 'General Health',
    description: 'Routine checkups, health screenings, and preventive care services for overall wellness.',
  },
  {
    icon: Pill,
    title: 'Chronic Care Management',
    description: 'Long-term management of chronic conditions like diabetes, hypertension, and thyroid disorders.',
  },
  {
    icon: Users,
    title: 'Family Health',
    description: 'Comprehensive healthcare services for all family members, from children to seniors.',
  },
  {
    icon: Dumbbell,
    title: 'Lifestyle Medicine',
    description: 'Nutrition counseling, fitness guidance, and wellness programs for a healthier lifestyle.',
  },
  {
    icon: HeartPulse,
    title: 'Cardiac Care',
    description: 'Heart health screenings, ECG, and management of cardiovascular conditions.',
  },
  {
    icon: Thermometer,
    title: 'Acute Care',
    description: 'Treatment for sudden illnesses, infections, and minor injuries requiring immediate attention.',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Eye examinations, vision testing, and treatment for common eye conditions.',
  },
  {
    icon: Ear,
    title: 'ENT Services',
    description: 'Care for ear, nose, and throat conditions including allergies and sinus problems.',
  },
];

const SupportiveCare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent to-primary py-24 md:py-32">
          <div className="container-custom text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-white/10 text-secondary rounded-full text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Supportive Care Services
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Complete healthcare support for your overall well-being and quality of life
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Supportive Care</span> Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Beyond specialized care, we provide comprehensive healthcare services to support your complete well-being.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AnimatedSection key={service.title} delay={index * 0.05} direction="scale">
                    <div className="group bg-card rounded-2xl p-8 h-full card-elevated hover:bg-accent transition-all duration-500">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                        <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-white mb-4 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-white/80 leading-relaxed transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                Need Healthcare Support?
              </h2>
              <p className="text-primary/80 text-lg mb-8 max-w-xl mx-auto">
                Our medical team is here to help you with all your healthcare needs.
              </p>
              <Button size="xl" className="bg-primary text-primary-foreground rounded-full" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupportiveCare;
