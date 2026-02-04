import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/AnimatedSection';

const AboutSection = () => {
  const features = [
    { text: 'Free Consultation', color: 'bg-[#003C43]' },
    { text: 'Mental Satisfaction', color: 'bg-[#408E91]' },
    { text: 'Emergency Service', color: 'bg-[#245953]' },
    { text: 'Psychologists Services', color: 'bg-[#408E91]' }
  ];

  return (
    <section className="py-16 md:py-20 xl:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl 2xl:max-w-[1600px]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Side - Images */}
          <AnimatedSection direction="left" className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/About Us.png"
                alt="Therapy session"
                className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-cover"
              />

              {/* Circular Overlay Image - Top Left */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 md:border-6 lg:border-8 border-white shadow-xl">
                <img
                  src="/About Us Detail.png"
                  alt="Counseling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge - Bottom Right */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 bg-gradient-to-br from-[#408E91] to-[#245953] rounded-2xl md:rounded-3xl px-5 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 xl:px-10 xl:py-7 text-white shadow-xl">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1">10+</div>
                  <div className="text-base md:text-lg xl:text-xl font-semibold">Years</div>
                  <div className="text-xs md:text-sm xl:text-base opacity-90">Of Experience</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Content */}
          <AnimatedSection delay={0.2} className="space-y-4 md:space-y-6">
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-[#003C43] font-semibold text-xs md:text-sm xl:text-base uppercase tracking-wider">
                ABOUT US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="heading-2 text-gray-900 leading-tight">
              Your Journey To Mental Wellness Starts Here
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
              Every small step toward better mental health is a significant achievement in our lives. With the right support, each individual can find the strength to face challenges, manage stress, and build positive habits. We believe that everyone deserves the opportunity to grow, thrive, and experience inner peace. Through an empathetic and professional approach, we are here to help you discover the best solutions for lasting mental and emotional well-being.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 xl:gap-5 py-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <div className={`${feature.color} w-7 h-7 md:w-8 md:h-8 xl:w-10 xl:h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-900 font-semibold text-sm md:text-base xl:text-lg">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gray-50 border-l-4 border-[#408E91] pl-4 md:pl-6 py-3 md:py-4 my-4 md:my-6">
              <p className="text-gray-700 italic text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
                Healing doesn't mean the damage never existed; it means the strength to rise is greater than the pain
              </p>
            </div>

            {/* Signature and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4">
              {/* Signature Image */}
              <div className="w-28 h-14 md:w-32 md:h-16 xl:w-36 xl:h-18">
                <img
                  src="/api/placeholder/150/80"
                  alt="Signature"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Read More Button */}
              <Button
                asChild
                className="bg-[#003C43] hover:bg-[#245953] text-white px-6 md:px-8 xl:px-10 py-5 md:py-6 xl:py-7 rounded-full text-base md:text-lg xl:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/about">Read More</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;