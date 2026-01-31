import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Clock, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Women Care', path: '/women-care' },
  { name: 'Supportive Care', path: '/supportive-care' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-3 px-0">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Office Time: Mon - Fri 8:00 - 6:30</span>
            </div>
            <div className="h-4 w-px bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Serenity Lane, Blissfield, CA 90210</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="w-9 h-9 rounded-md bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-md bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-md bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/mufaddal-logo.png"
                alt="Mufaddal Polyclinic"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
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
              <div className="container-custom py-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${location.pathname === link.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button variant="hero" size="lg" className="mt-4" asChild>
                    <Link to="/contact">Book Appointment</Link>
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