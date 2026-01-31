import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    { text: 'Free Consultation', color: 'bg-[#003C43]' },
    { text: 'Mental Satisfaction', color: 'bg-[#408E91]' },
    { text: 'Emergency Service', color: 'bg-[#245953]' },
    { text: 'Psychologists Services', color: 'bg-[#408E91]' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/About Us.png"
                alt="Therapy session"
                className="w-full h-[600px] object-cover"
              />

              {/* Circular Overlay Image - Top Left */}
              <div className="absolute top-8 left-8 w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src="/About Us Detail.png"
                  alt="Counseling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge - Bottom Right */}
              <div className="absolute bottom-8 right-8 bg-gradient-to-br from-[#408E91] to-[#245953] rounded-3xl px-8 py-6 text-white shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">10+</div>
                  <div className="text-lg font-semibold">Years</div>
                  <div className="text-sm opacity-90">Of Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-[#003C43] font-semibold text-sm uppercase tracking-wider">
                ABOUT US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your Journey To Mental Wellness Starts Here
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Every small step toward better mental health is a significant achievement in our lives. With the right support, each individual can find the strength to face challenges, manage stress, and build positive habits. We believe that everyone deserves the opportunity to grow, thrive, and experience inner peace. Through an empathetic and professional approach, we are here to help you discover the best solutions for lasting mental and emotional well-being.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`${feature.color} w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-900 font-semibold text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gray-50 border-l-4 border-[#408E91] pl-6 py-4 my-6">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                Healing doesn't mean the damage never existed; it means the strength to rise is greater than the pain
              </p>
            </div>

            {/* Signature and Button */}
            <div className="flex items-center gap-6 pt-4">
              {/* Signature Image */}
              <div className="w-32 h-16">
                <img
                  src="/api/placeholder/150/80"
                  alt="Signature"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Read More Button */}
              <Button
                asChild
                className="bg-[#003C43] hover:bg-[#245953] text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/about">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;