import { CheckCircle, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface Benefit {
  text: string;
}

const AboutSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      text: "Prioritizing well-being helps you thrive emotionally, socially, and personally every day.",
    },
    {
      text: "Strong minds build strong lives; support and care create lasting peace.",
    },
    {
      text: "Inner peace starts with awareness, acceptance, and support when it's needed most.",
    },
    {
      text: "Emotional strength shapes how we live, connect, and move forward confidently.",
    },
  ];

  const features: string[] = [
    "Free Consultation",
    "Mental Satisfaction",
    "Emergency Service",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F5FAFA]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr,1fr] gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Image */}
          <AnimatedSection direction="left" className="order-1 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Appointment.png"
                  alt="Mental health consultation"
                  className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Middle Content */}
          <AnimatedSection direction="up" delay={0.2} className="order-2 lg:order-2">
            <div className="space-y-4 md:space-y-6">
              <span className="text-[#408E91] font-semibold text-xs md:text-sm tracking-wider uppercase">
                ABOUT US
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003C43] leading-tight">
                Because Your Mental Health Matters
              </h2>

              <div className="space-y-4 md:space-y-5 pt-2 md:pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#245953] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Card */}
          <AnimatedSection direction="right" delay={0.4} className="order-3 lg:order-3">
            <div className="bg-gradient-to-br from-[#003C43] to-[#245953] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl mx-auto max-w-md lg:max-w-none">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8 leading-snug">
                Together, We Overcome
              </h3>

              <div className="space-y-4 md:space-y-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-base md:text-lg font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
