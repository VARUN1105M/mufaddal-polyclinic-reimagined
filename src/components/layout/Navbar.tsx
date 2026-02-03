import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Clock, MapPin, Facebook, Twitter, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Homepage', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Women Care Services',
    path: '/women-care',
    dropdown: [
      { name: 'Women Wellness', path: '/women-care/wellness' },
      { name: 'Period Care', path: '/women-care/period-care' },
      { name: 'Hormone Balance', path: '/women-care/hormone-balance' },
      { name: 'PCOS Care', path: '/women-care/pcos-care' },
      { name: 'Pregnancy Check', path: '/women-care/pregnancy' },
      { name: 'Postnatal Care', path: '/women-care/postnatal' },
      { name: 'Anemia & Thyroid Management', path: '/women-care/anemia-thyroid' },
      { name: 'Menopause Care', path: '/women-care/menopause' },
      { name: 'Breast Care', path: '/women-care/breast-care' },
      { name: 'Mental Wellness', path: '/women-care/mental-wellness' },
    ]
  },
  {
    name: 'Supportive Care Services',
    path: '/supportive-care',
    dropdown: [
      { name: 'General Physician', path: '/supportive-care/physician' },
      { name: 'Dental Care', path: '/supportive-care/dental' },
      { name: 'Physiotherapy Care', path: '/supportive-care/physiotherapy' },
      { name: 'ENT Care', path: '/supportive-care/ent' },
      { name: 'Diabetes Care', path: '/supportive-care/diabetes' },
      { name: 'Nutrition Care', path: '/supportive-care/nutrition' },
      { name: 'Pain Management', path: '/supportive-care/pain-management' },
      { name: 'Preventive Care', path: '/supportive-care/preventive' },
    ]
  },
  { name: 'Doctors', path: '/team' },
  // disabled pages
  // {
  //   name: 'Pages',
  //   path: '/pages',
  //   dropdown: [
  //     { name: 'Pricing', path: '/pricing' },
  //     { name: 'Doctors', path: '/team' },
  //     { name: 'Blogs', path: '/blogs' },
  //     { name: 'Blog Detail', path: '/blogs/detail' },
  //     { name: 'FAQs', path: '/faqs' },
  //     { name: 'Error 404', path: '/404' },
  //   ]
  // },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMobileDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar - Primary Color */}
      <div className="bg-[#003C43] text-white py-3.5 px-0">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Office Time : Mon - Fri 8:00 - 6:30</span>
              </div>
              <div className="h-4 w-px bg-white/30 hidden lg:block"></div>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">123 Serenity Lane, Blissfield, CA 90210</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white shadow-md'
          : 'bg-white shadow-sm'
          }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/mufaddal-logo.png"
                alt="Mufaddal Polyclinic"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path ||
                  (link.dropdown && link.dropdown.some(item => location.pathname === item.path));
                const hasDropdown = link.dropdown && link.dropdown.length > 0;

                return (
                  <div key={link.path} className="relative group">
                    {hasDropdown ? (
                      <button
                        className={`px-5 py-2.5 text-base font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${isActive
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                          }`}
                      >
                        {link.name}
                        <svg
                          className="w-4 h-4 ml-0.5 transition-transform group-hover:rotate-180 duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className={`px-5 py-2.5 text-base font-medium transition-all duration-200 flex items-center gap-1 ${isActive
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                          }`}
                      >
                        {link.name}
                      </Link>
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#245953] to-[#408E91]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Dropdown Menu */}
                    {hasDropdown && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px] overflow-hidden">
                          {link.dropdown.map((item, index) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-5 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-[#245953]/5 hover:to-[#408E91]/5 transition-all duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                className="bg-[#003C43] hover:bg-[#245953] text-white px-6 py-6 rounded-full font-semibold text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  <FileText className="w-4 h-4" />
                  Get Quotes
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path ||
                      (link.dropdown && link.dropdown.some(item => location.pathname === item.path));
                    const hasDropdown = link.dropdown && link.dropdown.length > 0;
                    const isDropdownOpen = hasDropdown && activeMobileDropdown === link.name;

                    return (
                      <div key={link.path}>
                        {hasDropdown ? (
                          <>
                            <button
                              onClick={() => setActiveMobileDropdown(isDropdownOpen ? null : link.name)}
                              className={`w-full px-4 py-3 rounded-lg text-base font-medium transition-all flex items-center justify-between ${isActive
                                ? 'bg-gradient-to-r from-[#245953] to-[#408E91] text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                              {link.name}
                              <svg
                                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            <AnimatePresence>
                              {isDropdownOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 pt-2 flex flex-col gap-1">
                                    {link.dropdown.map((item) => (
                                      <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${location.pathname === item.path
                                          ? 'bg-[#408E91]/10 text-[#003C43]'
                                          : 'text-gray-600 hover:bg-gray-50'
                                          }`}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={link.path}
                            className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive
                              ? 'bg-gradient-to-r from-[#245953] to-[#408E91] text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                              }`}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                  <Button
                    className="mt-4 bg-[#003C43] hover:bg-[#245953] text-white py-6 rounded-full font-semibold flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="/contact">
                      <FileText className="w-4 h-4" />
                      Get Quotes
                    </Link>
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;