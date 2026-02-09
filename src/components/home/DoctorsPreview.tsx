import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Users, Brain, Smile, ShieldCheck, Headphones } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function OurServices() {
  const location = useLocation();

  const services = [
    {
      id: 1,
      title: 'Individual Therapy',
      description: 'Tailored guidance crafted to meet your unique needs and goals effectively.',
      image: '/Individual Therapy.png',
      icon: Heart,
      link: '/services/individual-therapy'
    },
    {
      id: 2,
      title: 'Group Counseling',
      description: 'Professional support designed to guide emotional well-being every single day.',
      image: '/Group Counseling.png',
      icon: Users,
      link: '/services/group-counseling'
    },
    {
      id: 3,
      title: 'Stress Management',
      description: 'Empowering digital resources to build healthy habits independently.',
      image: '/Stress Management.png',
      icon: Brain,
      link: '/services/stress-management'
    },
    {
      id: 4,
      title: 'Career & Life Coaching',
      description: 'Helping you gain clarity, confidence, and direction to build the life you aspire to.',
      image: '/Blog4.png',
      icon: Smile,
      link: '/services/career-life-coaching'
    },
    {
      id: 5,
      title: 'Crisis Intervention Support',
      description: 'Immediate emotional support to help you stabilize, recover, and regain balance.',
      image: '/Blog5.png',
      icon: ShieldCheck,
      link: '/services/crisis-support'
    },
    {
      id: 6,
      title: 'Mindfulness & Meditation Sessions',
      description: 'Guided sessions that cultivate inner calm, self-awareness, and daily emotional balance.',
      image: '/Blog6.png',
      icon: Headphones,
      link: '/services/mindfulness-meditation'
    }
  ];

  const displayedServices = location.pathname === '/services' ? services : services.slice(0, 3);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <span className="text-[#003C43] text-sm md:text-base font-semibold uppercase tracking-wider">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
            Breaking Stigmas, Building Strength
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={index * 0.1}
              className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Badge */}
                <div className="absolute bottom-6 left-6 w-16 h-16 md:w-20 md:h-20 bg-[#003C43] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Read More Button */}
                <Link
                  to={service.link}
                  className="absolute bottom-6 right-6 bg-gray-900 hover:bg-[#003C43] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                >
                  Read More
                </Link>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#003C43] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-[#003C43] to-[#408E91] mb-4 group-hover:w-full transition-all duration-500"></div>

                <p className="text-gray-600 text-base leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#408E91]/10 to-transparent rounded-bl-full"></div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}