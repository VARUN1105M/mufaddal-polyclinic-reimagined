import { FileText, Users, Headphones, Wrench } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  {
    icon: FileText,
    title: 'Personalized Wellness Plans',
    description: 'Tailored guidance crafted to meet your unique needs and goals effectively.',
    bgColor: 'bg-[#408E91]',
    iconBg: 'bg-white/30'
  },
  {
    icon: Users,
    title: 'Expert-Led Counseling Sessions',
    description: 'Professional support designed to guide emotional well-being every single day.',
    bgColor: 'bg-[#245953]',
    iconBg: 'bg-white/30'
  },
  {
    icon: Headphones,
    title: '24/7 Support Community',
    description: 'Always-connected space offering care, encouragement, and shared growth.',
    bgColor: 'bg-[#003C43]',
    iconBg: 'bg-white/20'
  },
  {
    icon: Wrench,
    title: 'Interactive Self-Care Tools',
    description: 'Empowering digital resources to build healthy habits independently.',
    bgColor: 'bg-[#245953]',
    iconBg: 'bg-white/20'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className={`${feature.bgColor} rounded-3xl p-8 text-white transition-transform hover:scale-105 duration-300`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;