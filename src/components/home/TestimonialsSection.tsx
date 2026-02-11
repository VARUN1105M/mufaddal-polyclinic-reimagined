import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OffersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const offers = [
    {
      id: 1,
      badge: 'LIMITED TIME',
      title: '₹499 Health Packages',
      description: 'Comprehensive health checkups and consultations at an unbeatable price. Perfect for routine wellness monitoring.',
      price: '₹499',
      originalPrice: '₹1,999',
      discount: '75% OFF',
      image: '/spo/We Are Hiring VIDEOGRAPHER INTERNS (14).png',
      gradient: 'from-emerald-500 to-teal-600',
      link: '/offers/health-package',
      animation: 'fade-left'
    },
    {
      id: 2,
      badge: 'ADVANCED CARE',
      title: 'Affordable Laparoscopic Procedures',
      description: 'State-of-the-art minimally invasive surgeries with expert care at competitive prices.',
      price: 'Starting ₹25,000',
      originalPrice: '₹45,000',
      discount: 'UP TO 45% OFF',
      image: '/spo/We Are Hiring VIDEOGRAPHER INTERNS (15).png',
      gradient: 'from-blue-500 to-cyan-600',
      link: '/offers/laparoscopy',
      animation: 'fade-down'
    },
    {
      id: 3,
      badge: 'PHARMACY DEALS',
      title: 'Cost-Effective Medicines',
      description: 'Quality medications at affordable prices. Save big on your regular prescriptions and healthcare needs.',
      price: 'Save up to 40%',
      originalPrice: '',
      discount: 'BEST PRICES',
      image: '/spo/We Are Hiring VIDEOGRAPHER INTERNS (16).png',
      gradient: 'from-purple-500 to-pink-600',
      link: '/offers/medicines',
      animation: 'fade-up'
    },
    {
      id: 4,
      badge: 'PREVENTIVE CARE',
      title: 'Selected Preventive Health Checkups',
      description: 'Early detection saves lives. Comprehensive screening packages tailored for different age groups.',
      price: 'From ₹999',
      originalPrice: '₹2,499',
      discount: '60% OFF',
      image: '/spo/We Are Hiring VIDEOGRAPHER INTERNS (17).png',
      gradient: 'from-orange-500 to-red-600',
      link: '/offers/preventive-checkup',
      animation: 'fade-right'
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
        <div 
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
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
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              data-aos={offer.animation}
              data-aos-delay={index * 100}
              className="group rounded-3xl overflow-hidden border-2 border-[#408E91]/20 hover:border-[#408E91] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white flex flex-col"
            >
              {/* Image with Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Gradient Overlay for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* CTA Button Area */}
              <div className="p-4 mt-auto">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#003C41] hover:bg-[#408E91] text-white rounded-xl font-bold transition-all duration-300 group-hover:shadow-md"
                >
                  <span>Get Offer</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}