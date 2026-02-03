import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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
    { name: 'Blogs', path: '/blog' },
    { name: 'FAQs', path: '/faqs' }
  ];

  return (
    <footer className="w-full relative text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[#003C43]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Logo + About */}
          <div>
            <div className="mb-4">
              <img
                src="/mufaddal-logo.png"
                alt="Mufaddal Polyclinic Logo"
                className="h-16 w-auto"
              />
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Professional, responsive, and soothing design for therapists, counselors, and life coaches.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 mt-1" />
                <p className="text-white/80 text-sm">
                  123 Serenity Lane, Blissfield, CA 90210, United States
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <a href="mailto:info@yourmail.com" className="text-white/80 text-sm hover:text-white">
                  Info@yourmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <a href="tel:+15551234567" className="text-white/80 text-sm hover:text-white">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/80 text-sm hover:text-white transition-all duration-300 inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-white/80 text-sm mb-4">
              Get the latest news other tips.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#408E91]"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#003C43] hover:bg-[#245953] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg border-2 border-white/20"
              >
                Subscribe now
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/70 text-sm">
            Copyright © 2025 Widagdos. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
