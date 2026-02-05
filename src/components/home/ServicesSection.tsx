import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/AnimatedSection';
import NumberTicker from '@/components/ui/NumberTicker';

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
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Side - Images */}
          <AnimatedSection direction="left" className="relative ml-8 mt-8 mb-8 mr-8">
            {/* Main Image */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10">
              <img
                src="/About Us.png"
                alt="Therapy session"
                className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-cover"
              />
            </div>

            {/* Circular Overlay Image - Top Left */}
            <div className="absolute -top-10 -left-10 md:-top-14 md:-left-14 lg:-top-20 lg:-left-20 w-36 h-36 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 md:border-6 lg:border-8 border-white shadow-xl z-20">
              <img
                src="/About Us Detail.png"
                alt="Counseling"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Badge - Bottom Right */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 lg:-bottom-10 lg:-right-10 bg-gradient-to-br from-[#408E91] to-[#245953] rounded-2xl md:rounded-3xl px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 xl:px-12 xl:py-9 text-white shadow-xl z-20 flex flex-col justify-center items-center">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1">
                  <NumberTicker value={10} />+
                </div>
                <div className="text-base md:text-lg font-semibold">Years</div>
                <div className="text-xs md:text-sm opacity-90">Of Experience</div>
              </div>
            </div>

          </AnimatedSection>

          {/* Right Side - Content */}
          <AnimatedSection delay={0.2} className="space-y-4 md:space-y-5">
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-[#003C43] font-semibold text-xs md:text-sm uppercase tracking-wider">
                ABOUT US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="heading-3 md:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Your Journey To Mental Wellness Starts Here
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Every small step toward better mental health is a significant achievement in our lives. With the right support, each individual can find the strength to face challenges, manage stress, and build positive habits. We believe that everyone deserves the opportunity to grow, thrive, and experience inner peace. Through an empathetic and professional approach, we are here to help you discover the best solutions for lasting mental and emotional well-being.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 py-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <div className={`${feature.color} w-6 h-6 md:w-7 md:h-7 xl:w-9 xl:h-9 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 xl:w-5 xl:h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-900 font-semibold text-sm md:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gray-50 border-l-4 border-[#408E91] pl-4 md:pl-6 py-3 md:py-4 my-3 md:my-5">
              <p className="text-gray-700 italic text-sm md:text-base lg:text-lg leading-relaxed">
                Healing doesn't mean the damage never existed; it means the strength to rise is greater than the pain
              </p>
            </div>

            {/* Signature and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-3">
              {/* Signature Image */}
              <div className="w-24 h-12 md:w-28 md:h-14">
                <img
                  src="/api/placeholder/150/80"
                  alt="Signature"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Read More Button */}
              <Button
                asChild
                className="bg-[#003C43] hover:bg-[#245953] text-white px-5 md:px-7 py-4 md:py-5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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