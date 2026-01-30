import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Baby, Activity, Stethoscope, Pill, Users, Brain, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';

const womenCareServices = [
  { icon: Heart, title: 'Women Wellness', description: 'Comprehensive wellness programs tailored for women' },
  { icon: Activity, title: 'Period Care', description: 'Expert care for menstrual health and disorders' },
  { icon: Brain, title: 'PCOS Care', description: 'Specialized treatment for polycystic ovary syndrome' },
  { icon: Baby, title: 'Pregnancy Check', description: 'Complete prenatal and postnatal care services' },
];

const supportiveCareServices = [
  { icon: Stethoscope, title: 'General Health', description: 'Routine checkups and preventive healthcare' },
  { icon: Pill, title: 'Chronic Care', description: 'Management of long-term health conditions' },
  { icon: Users, title: 'Family Health', description: 'Healthcare services for the whole family' },
  { icon: Dumbbell, title: 'Lifestyle Medicine', description: 'Nutrition, fitness, and wellness guidance' },
];

const ServiceCard = ({ 
  service, 
  index, 
  variant = 'primary' 
}: { 
  service: typeof womenCareServices[0]; 
  index: number; 
  variant?: 'primary' | 'secondary' 
}) => {
  const Icon = service.icon;
  
  return (
    <AnimatedSection delay={index * 0.1} direction="scale">
      <div className={`group relative overflow-hidden rounded-2xl p-8 h-full transition-all duration-500 card-elevated ${
        variant === 'primary' 
          ? 'bg-card hover:bg-primary' 
          : 'bg-card hover:bg-accent'
      }`}>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
          variant === 'primary'
            ? 'bg-primary/10 group-hover:bg-white/20'
            : 'bg-accent/10 group-hover:bg-white/20'
        }`}>
          <Icon className={`w-7 h-7 transition-colors duration-500 ${
            variant === 'primary'
              ? 'text-primary group-hover:text-white'
              : 'text-accent group-hover:text-white'
          }`} />
        </div>

        <h3 className={`font-display text-xl font-semibold mb-3 transition-colors duration-500 ${
          variant === 'primary'
            ? 'text-foreground group-hover:text-white'
            : 'text-foreground group-hover:text-white'
        }`}>
          {service.title}
        </h3>

        <p className={`text-muted-foreground mb-6 transition-colors duration-500 ${
          variant === 'primary'
            ? 'group-hover:text-white/80'
            : 'group-hover:text-white/80'
        }`}>
          {service.description}
        </p>

        <div className={`flex items-center gap-2 text-sm font-medium transition-all duration-500 ${
          variant === 'primary'
            ? 'text-primary group-hover:text-white'
            : 'text-accent group-hover:text-white'
        }`}>
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </AnimatedSection>
  );
};

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Women Care */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Women Care Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Specialized Care for <span className="text-primary">Women</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our dedicated women's health services address unique healthcare needs 
            with expertise, sensitivity, and personalized attention.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {womenCareServices.map((service, index) => (
            <Link key={service.title} to="/women-care">
              <ServiceCard service={service} index={index} variant="primary" />
            </Link>
          ))}
        </div>

        <AnimatedSection className="text-center mb-20">
          <Button size="lg" variant="outline" asChild>
            <Link to="/women-care">
              View All Women Care Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>

        {/* Supportive Care */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Supportive Care Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete <span className="text-accent">Healthcare</span> Support
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond specialized care, we offer comprehensive healthcare services 
            to support your overall health and well-being.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {supportiveCareServices.map((service, index) => (
            <Link key={service.title} to="/supportive-care">
              <ServiceCard service={service} index={index} variant="secondary" />
            </Link>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/supportive-care">
              View All Supportive Care Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
