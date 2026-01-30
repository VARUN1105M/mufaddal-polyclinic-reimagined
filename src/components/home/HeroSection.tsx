import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-primary via-primary to-accent">
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape w-72 h-72 bg-secondary/30 top-20 -left-20 animate-float" />
        <div className="floating-shape w-96 h-96 bg-white/10 bottom-20 right-10 animate-float-delayed" />
        <div className="floating-shape w-48 h-48 bg-secondary/20 top-1/2 left-1/3 animate-float" />
        
        {/* Decorative Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,300 Q300,100 600,400 T1200,300"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100,500 Q400,200 700,500 T1400,400"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-6"
            >
              Your Trusted Healthcare Partner
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Caring for{' '}
              <span className="text-secondary">Women's</span>{' '}
              Health & Wellness
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              Experience compassionate healthcare at Mufaddal Polyclinic. 
              From women's wellness to comprehensive supportive care, 
              we're dedicated to your complete health journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              <div>
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">10k+</div>
                <div className="text-white/70 text-sm">Happy Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-white/70 text-sm">Expert Doctors</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">
              <div className="w-[480px] h-[600px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-secondary/30 to-white/10 backdrop-blur-sm border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&h=750&fit=crop"
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call us anytime</p>
                  <p className="font-semibold text-primary">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="font-bold text-primary">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on 500+ reviews
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
