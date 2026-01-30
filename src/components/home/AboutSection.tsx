import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  'State-of-the-art medical facilities',
  'Experienced & compassionate doctors',
  'Personalized treatment plans',
  'Affordable healthcare services',
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <AnimatedSection direction="left" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=400&h=300&fit=crop"
                    alt="Medical consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&h=400&fit=crop"
                    alt="Medical equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=400&h=400&fit=crop"
                    alt="Healthcare team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&h=300&fit=crop"
                    alt="Patient care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold font-display">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-primary rounded-full text-sm font-medium mb-6">
              About Our Clinic
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Dedicated to Your{' '}
              <span className="text-primary">Health & Wellness</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Mufaddal Polyclinic, we believe in providing holistic healthcare 
              that addresses both physical and emotional well-being. Our team of 
              experienced professionals is committed to delivering personalized 
              care with compassion and expertise.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" asChild>
              <Link to="/about">
                Discover More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
