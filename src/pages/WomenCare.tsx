import { Link } from 'react-router-dom';
import { Heart, Activity, Brain, Baby, Shield, Flower, Sun, Moon, Sparkles, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const services = [
  {
    icon: Heart,
    title: 'Women Wellness',
    description: 'Comprehensive wellness programs designed specifically for women, covering physical, mental, and emotional health aspects.',
  },
  {
    icon: Activity,
    title: 'Period Care',
    description: 'Expert care for menstrual health, including treatment for irregular periods, heavy bleeding, and menstrual disorders.',
  },
  {
    icon: Brain,
    title: 'PCOS Care',
    description: 'Specialized diagnosis and treatment for Polycystic Ovary Syndrome with personalized management plans.',
  },
  {
    icon: Baby,
    title: 'Pregnancy Check',
    description: 'Complete prenatal care services including regular checkups, ultrasounds, and expert guidance throughout pregnancy.',
  },
  {
    icon: Shield,
    title: 'Fertility Care',
    description: 'Comprehensive fertility assessments and treatments to support your journey to parenthood.',
  },
  {
    icon: Flower,
    title: 'Menopause Support',
    description: 'Supportive care for managing menopause symptoms and maintaining health during this life transition.',
  },
  {
    icon: Sun,
    title: 'Hormonal Health',
    description: 'Expert management of hormonal imbalances affecting mood, energy, weight, and overall well-being.',
  },
  {
    icon: Moon,
    title: 'Breast Health',
    description: 'Screening and care services for breast health, including examinations and guidance.',
  },
  {
    icon: Sparkles,
    title: 'Aesthetic Gynecology',
    description: 'Specialized aesthetic procedures for women\'s intimate health and wellness.',
  },
  {
    icon: Pill,
    title: 'Contraception Counseling',
    description: 'Personalized guidance on contraception options to help you make informed choices.',
  },
];

const WomenCare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-accent py-24 md:py-32">
          <div className="container-custom text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-white/10 text-secondary rounded-full text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Women Care Services
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Comprehensive healthcare services designed specifically for women's unique health needs
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Women Care</span> Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From routine wellness to specialized treatments, we offer complete care for every stage of a woman's life.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AnimatedSection key={service.title} delay={index * 0.05} direction="scale">
                    <div className="group bg-card rounded-2xl p-8 h-full card-elevated hover:bg-primary transition-all duration-500">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
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
                Ready to Book Your Consultation?
              </h2>
              <p className="text-primary/80 text-lg mb-8 max-w-xl mx-auto">
                Our expert team is ready to provide you with personalized care and support.
              </p>
              <Button size="xl" className="bg-primary text-primary-foreground rounded-full" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WomenCare;
