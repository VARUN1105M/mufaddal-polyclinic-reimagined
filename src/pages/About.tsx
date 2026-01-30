import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-accent py-24 md:py-32">
          <div className="container-custom text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-white/10 text-secondary rounded-full text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About Mufaddal Polyclinic
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Dedicated to excellence in healthcare since 2009
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&h=300&fit=crop"
                      alt="Clinic interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden mt-8">
                    <img
                      src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=400&h=350&fit=crop"
                      alt="Medical team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=400&h=350&fit=crop"
                      alt="Patient care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden mt-8">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&h=300&fit=crop"
                      alt="Modern equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <span className="inline-block px-4 py-2 bg-secondary/20 text-primary rounded-full text-sm font-medium mb-6">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Legacy of Healing & Care
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded in 2009, Mufaddal Polyclinic began with a simple vision: 
                  to provide compassionate, accessible healthcare to our community. 
                  What started as a small clinic has grown into a comprehensive 
                  healthcare center serving thousands of patients every year.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our focus on women's health and supportive care services has made 
                  us a trusted name in the region. We continue to evolve with the 
                  latest medical advancements while maintaining our core values of 
                  empathy, excellence, and patient-centered care.
                </p>
                <ul className="space-y-4">
                  {[
                    '15+ years of trusted healthcare service',
                    '10,000+ satisfied patients',
                    '20+ specialized healthcare professionals',
                    'State-of-the-art medical facilities',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Our Guiding Principles
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To provide exceptional, patient-centered healthcare services that improve the quality of life for every individual we serve.',
                },
                {
                  icon: Eye,
                  title: 'Our Vision',
                  description: 'To be the most trusted healthcare provider in our community, known for excellence, innovation, and compassionate care.',
                },
                {
                  icon: Heart,
                  title: 'Our Values',
                  description: 'Compassion, integrity, excellence, respect, and continuous improvement guide everything we do at Mufaddal Polyclinic.',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={index * 0.1} direction="up">
                    <div className="bg-card rounded-2xl p-8 text-center card-elevated h-full">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
