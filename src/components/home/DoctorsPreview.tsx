import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function DoctorsPreview() {
  const location = useLocation();

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      image: '/doctor1.png',
      description: 'Expert in women\'s health with over 15 years of experience in preventive care and wellness.'
    },
    {
      id: 2,
      name: 'Dr. Dharun',
      role: 'Pulmonologist',
      image: '/doctor2.png',
      description: 'Available: Appointment Basis | OPD Timing: 5:00 PM – 9:00 PM'
    },
    {
      id: 3,
      name: 'Dr. Mahalakshmi',
      role: 'Dental Practitioner',
      image: '/doctor3.png',
      description: 'Available: Mon – Sat | OPD Timing: 5:00 PM – 9:00 PM'
    },
    {
      id: 4,
      name: 'Dr. Arva Lamak',
      role: 'Physiotherapist',
      image: '/doctor4.png',
      description: 'Available: Mon – Sat | OPD Timing: 9:30 AM – 2:00 PM & 4:30 PM – 8:00 PM'
    },
    {
      id: 5,
      name: 'Dr. Pavithra Sivakumar',
      role: 'General Practitioner',
      image: '/doctor5.png',
      description: 'Available: Mon – Sat | OPD Timing: 6:00 PM – 9:30 PM'
    },
    {
      id: 6,
      name: 'Dr. Mubarak J',
      role: 'Diabetologist',
      image: '/doctor6.png',
      description: 'Available: Tuesdays Only | OPD Timing: 11:00 AM – 1:00 PM'
    },
    {
      id: 7,
      name: 'Dr. V. J. Vikram',
      role: 'E.N.T',
      image: '/doctor7.png',
      description: 'Available: Appointment Basis | OPD Timing: 7:00 PM – 8:00 PM'
    },
    {
      id: 8,
      name: 'Dr. Christopher Anderson',
      role: 'Cardiologist',
      image: '/doctor8.png',
      description: 'Committed to heart health, offering comprehensive cardiac care and preventive strategies.'
    },
    {
      id: 9,
      name: 'Dr. Jennifer Thomas',
      role: 'Psychiatrist',
      image: '/doctor9.png',
      description: 'Helping patients achieve mental wellness through personalized therapy and medication management.'
    },
    {
      id: 10,
      name: 'Dr. SARA',
      role: 'General Practitioner',
      image: '/doctor10.png',
      description: 'Available: Mon – Sat | OPD Timing: 10:30 AM – 2:00 PM'
    },
    {
      id: 11,
      name: 'Dr. Mohamed Mubarak',
      role: 'Dermatologist',
      image: '/doctor11.png',
      description: 'Available: Mon & Wed | OPD Timing: 5:00 PM – 6:00 PM'
    },
    {
      id: 12,
      name: 'Dr. David Harris',
      role: 'Physical Therapist',
      image: '/doctor12.png',
      description: 'Restoring function and mobility through targeted physical rehabilitation programs.'
    }
  ];

  const displayedDoctors = doctors;

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <span className="text-[#003C43] text-sm md:text-base font-semibold uppercase tracking-wider">
            OUR DOCTORS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
            Meet Our Specialist Team
          </h2>
        </AnimatedSection>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedDoctors.map((doctor, index) => (
            <AnimatedSection
              key={doctor.id}
              delay={index * 0.1}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-[350px] overflow-hidden bg-gray-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003C43]/90 via-[#003C43]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <a href="#" className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#003C43] mb-1">
                  {doctor.name}
                </h3>
                <p className="text-[#408E91] font-medium text-xs uppercase tracking-wide mb-3">
                  {doctor.role}
                </p>
                <div className="w-12 h-0.5 bg-gray-200 mx-auto mb-3"></div>
                <p className="text-gray-600 text-sm leading-relaxed text-justify line-clamp-3">
                  {doctor.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}