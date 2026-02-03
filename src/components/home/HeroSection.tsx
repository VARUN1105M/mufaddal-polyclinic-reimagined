import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#1a4f5a] to-[#2d6e7e] flex items-end">
      {/* Floating Shapes/Lines Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Add more wavy lines as needed for "abstract lines" effect */}
          <path d="M80,0 Q70,25 80,50 T80,100" stroke="white" strokeWidth="0.2" fill="none" />
          <path d="M90,0 Q80,25 90,50 T90,100" stroke="white" strokeWidth="0.2" fill="none" />
        </svg>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          {/* Abstract curved lines similar to the image */}
          <svg className="w-full h-full" viewBox="0 0 500 800" fill="none">
            <path d="M100,0 C150,200 50,600 300,800" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <path d="M400,0 C350,200 450,600 200,800" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <circle cx="200" cy="500" r="10" fill="white" fillOpacity="0.8" />
            <circle cx="400" cy="200" r="15" fill="white" fillOpacity="0.8" />
            <circle cx="450" cy="700" r="12" fill="white" fillOpacity="0.8" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-16 pb-0 lg:pt-24 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left self-center pb-12 lg:pb-24"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#64ccc5] font-medium tracking-wider text-sm uppercase mb-4"
            >
              FIND BALANCE, EMBRACE LIFE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 font-display"
            >
              Caring for Your <br />
              <span className="text-[#88e8dd]">Inner Peace</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ delay: 0.4 }}
              className="h-1 bg-white/50 mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/90 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Discover clarity, confidence, and emotional wellness through guided support that helps you manage stress, heal from within, and grow stronger in every aspect of your mental health journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <Button
                className="bg-[#134e4a] hover:bg-[#115e59] text-white rounded-full px-8 py-6 text-base"
              >
                <Link to="/contact">Start A Checkup Now</Link>
              </Button>

              <button
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Play Video"
              >
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            {/* Main Image */}
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              <img
                src="/hero-woman-transparent (2).png"
                alt="Smiling Doctor"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating Call Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-10 -right-4 lg:-right-12 bg-[#0e4853] text-white p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20 max-w-[240px]"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#0e4853] fill-current" />
              </div>
              <div>
                <p className="text-xs text-white/80">Call us anytime</p>
                <p className="font-bold text-lg">(555) 123-4567</p>
              </div>
            </motion.div>

            {/* Floating Review Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute bottom-20 -left-8 lg:-left-16 bg-[#4a7c7c]/90 backdrop-blur-md text-white p-4 rounded-xl shadow-lg z-20"
            >
              <div className="text-2xl font-bold">4.9 /5</div>
              <div className="text-sm text-white/80">Review on Google</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
