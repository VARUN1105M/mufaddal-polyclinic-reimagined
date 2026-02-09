import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import mufaddalLogo from '../home/mufaddal-logo.png';
import AnimatedSection from '../ui/AnimatedSection';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Homepage', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Appointment', path: '/contact' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'FAQs', path: '/faqs' }
  ];

  return (
    <footer className="w-full relative text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[#003C43]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6 md:py-8 lg:py-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 mb-4 md:mb-6">

          {/* Logo + About */}
          <AnimatedSection delay={0}>
            <div>
              <div className="mb-2">
                <img
                  src={mufaddalLogo}
                  alt="Mufaddal Polyclinic Logo"
                  className="h-8 md:h-10 xl:h-12 2xl:h-14 w-auto"
                />
              </div>

              <p className="text-white/80 text-xs md:text-sm xl:text-base leading-loose mb-3 text-justify">
                Professional, responsive, and soothing design for therapists, counselors, and life coaches.
              </p>

              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 xl:w-12 xl:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/mufaddal_polyclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 xl:w-12 xl:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div>
              <h3 className="text-white font-bold text-sm md:text-base xl:text-lg 2xl:text-xl mb-4 md:mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white/60 mt-1" />
                  <p className="text-white/80 text-xs md:text-sm xl:text-base">
                    4/7 South Madha Church Street<br />
                    Royapuram, Chennai – 600013
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white/60" />
                  <div className="text-white/80 text-xs md:text-sm xl:text-base">
                    <a href="tel:+919840418974" className="hover:text-white block">
                      Call us: +91 9840 418 974
                    </a>
                    <a href="https://wa.me/917305088491" className="hover:text-white block">
                      WhatsApp: +91 7305 088 491
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white/60" />
                  <a href="mailto:info@yourmail.com" className="text-white/80 text-sm md:text-base xl:text-lg hover:text-white">
                    Info@yourmail.com
                  </a>
                </div> */}
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="text-white font-bold text-sm md:text-base xl:text-lg 2xl:text-xl mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-3 md:space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/80 text-xs md:text-sm xl:text-base hover:text-white transition-all duration-300 inline-block hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Newsletter */}
          <AnimatedSection delay={0.3}>
            <div>
              <h3 className="text-white font-bold text-sm md:text-base xl:text-lg 2xl:text-xl mb-3 md:mb-4">Newsletter</h3>
              <p className="text-white/80 text-xs md:text-sm xl:text-base mb-2">
                Get the latest news other tips.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email here"
                  className="w-full px-4 py-2.5 md:py-3 xl:py-4 text-xs md:text-sm xl:text-base rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#408E91]"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-[#003C43] hover:bg-[#245953] text-white font-semibold py-2.5 md:py-3 xl:py-4 px-6 text-xs md:text-sm xl:text-base rounded-full transition-all duration-300 hover:shadow-lg border-2 border-white/20"
                >
                  Subscribe now
                </button>
              </form>
            </div>
          </AnimatedSection>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-3 md:mb-4"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/70 text-[10px] md:text-xs xl:text-sm">
            Copyright © 2025 Mufaddal Polyclinic. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
