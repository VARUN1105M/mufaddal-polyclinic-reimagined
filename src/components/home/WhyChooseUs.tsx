import { Shield, Clock, Heart, Award, Users, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted Expertise',
    description: 'Board-certified specialists with years of experience in women\'s health and general medicine.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock medical support and emergency services for your peace of mind.',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We treat every patient with empathy, respect, and personalized attention.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'State-of-the-art facilities and adherence to highest healthcare standards.',
  },
  {
    icon: Users,
    title: 'Patient-Centered',
    description: 'Your health goals drive our treatment approach and care plans.',
  },
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description: 'Advanced diagnostic and treatment technologies for accurate care.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-white" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 text-secondary rounded-full text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The <span className="text-secondary">Mufaddal</span> Difference
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We combine medical excellence with genuine care to deliver 
            healthcare experiences that make a real difference.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={reason.title} delay={index * 0.1} direction="scale">
                <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
