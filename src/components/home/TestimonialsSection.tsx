import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function OffersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const offers = [
    {
      id: 1,
      badge: 'LIMITED TIME',
      title: '₹499 Health Packages',
      description: 'Comprehensive health checkups and consultations at an unbeatable price. Perfect for routine wellness monitoring.',
      price: '₹499',
      originalPrice: '₹1,999',
      discount: '75% OFF',
      image: '/section1.jpg',
      gradient: 'from-emerald-500 to-teal-600',
      link: '/offers/health-package'
    },
    {
      id: 2,
      badge: 'ADVANCED CARE',
      title: 'Affordable Laparoscopic Procedures',
      description: 'State-of-the-art minimally invasive surgeries with expert care at competitive prices.',
      price: 'Starting ₹25,000',
      originalPrice: '₹45,000',
      discount: 'UP TO 45% OFF',
      image: '/section2.jpg',
      gradient: 'from-blue-500 to-cyan-600',
      link: '/offers/laparoscopy'
    },
    {
      id: 3,
      badge: 'PHARMACY DEALS',
      title: 'Cost-Effective Medicines',
      description: 'Quality medications at affordable prices. Save big on your regular prescriptions and healthcare needs.',
      price: 'Save up to 40%',
      originalPrice: '',
      discount: 'BEST PRICES',
      image: '/section3.jpg',
      gradient: 'from-purple-500 to-pink-600',
      link: '/offers/medicines'
    },
    {
      id: 4,
      badge: 'PREVENTIVE CARE',
      title: 'Selected Preventive Health Checkups',
      description: 'Early detection saves lives. Comprehensive screening packages tailored for different age groups.',
      price: 'From ₹999',
      originalPrice: '₹2,499',
      discount: '60% OFF',
      image: '/section4.jpg',
      gradient: 'from-orange-500 to-red-600',
      link: '/offers/preventive-checkup'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#408E91]/5 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-16">
          <div>
            <span className="text-[#003C43] text-sm md:text-base font-semibold uppercase tracking-wider mb-4 block flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#408E91]" />
              SPECIAL OFFERS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003C43]">
              Our Exclusive <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#408E91] to-[#003C43] bg-clip-text text-transparent">
                Healthcare Offers
              </span>
            </h2>
          </div>

          {/* View All Button */}
          <Link
            to="/offers"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-gradient-to-r from-[#003C43] to-[#245953] hover:from-[#245953] hover:to-[#408E91] text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Offers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group rounded-3xl overflow-hidden border-2 border-[#408E91]/20 hover:border-[#408E91] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Only */}
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
