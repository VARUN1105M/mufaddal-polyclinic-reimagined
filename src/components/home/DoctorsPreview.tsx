import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function DoctorsPreview() {
  const location = useLocation();

  const doctors = [
    {
      id: 3,
      name: 'Dr. Mahalakshmi',
      role: 'Dental Practitioner',
      image: '/doctors/doctor3.png'
    },
    {
      id: 4,
      name: 'Dr. Arva Lamak',
      role: 'Physiotherapist',
      image: '/doctors/doctor4.png'
    },
    {
      id: 5,
      name: 'Dr. Pavithra Sivakumar',
      role: 'General Practitioner',
      image: '/doctors/doctor5.png'
    },
    {
      id: 9,
      name: 'Dr. Jennifer Thomas',
      role: 'Psychiatrist',
      image: '/doctors/doctor9.png'
    },
    {
      id: 12,
      name: 'Dr. Nasreen',
      role: 'Gynaecologist',
      image: '/doctors/doctor12.png'
    },
    {
      id: 10,
      name: 'Dr. SARA',
      role: 'General Practitioner',
      image: '/doctors/doctor10.png'
    },
    {
      id: 8,
      name: 'Dr. Ajaysinh V Devda',
      role: 'Orthopedic surgeon',
      image: '/doctors/doctor8.png'
    },
    {
      id: 1,
      name: 'Dr. Mubarak J',
      role: 'Diabetologist',
      image: '/doctors/doctor1.png'
    },
    {
      id: 2,
      name: 'Dr. Dharun',
      role: 'Pulmonologist',
      image: '/doctors/doctor2.png'
    },
    {
      id: 7,
      name: 'Dr. V. J. Vikram',
      role: 'E.N.T',
      image: '/doctors/doctor7.png'
    },
    {
      id: 11,
      name: 'Dr. Mohamed Mubarak',
      role: 'Dermatologist',
      image: '/doctors/doctor11.png'
    }
  ];

  const isHomePage = location.pathname === '/';
  const displayedDoctors = isHomePage ? doctors.slice(0, 8) : doctors;

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
                  loading="lazy"
                  width="400"
                  height="350"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#003C43] mb-1">
                  {doctor.name}
                </h3>
                <p className="text-[#408E91] font-medium text-xs uppercase tracking-wide mb-3">
                  {doctor.role}
                </p>
                <div className="w-12 h-0.5 bg-gray-200 mx-auto"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Explore More Button */}
        {isHomePage && (
          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/team"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#003C41] hover:bg-[#408E91] text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 uppercase tracking-wider text-sm"
            >
              Explore More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}