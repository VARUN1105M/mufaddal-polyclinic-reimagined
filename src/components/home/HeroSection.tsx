import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NumberTicker from '@/components/ui/NumberTicker';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[85vh] xl:min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#88E8DD] to-[#408E91] flex items-end">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl 2xl:max-w-[1600px] relative z-10 pt-12 md:pt-16 lg:pt-24 pb-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-end">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left self-center pb-12 lg:pb-20 xl:pb-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white font-medium tracking-wider text-xs md:text-sm xl:text-base uppercase mb-3 md:mb-4">
              <span className="text-[#003C43]">FIND BALANCE, EMBRACE LIFE</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight mb-4 md:mb-6 font-display">
              Caring for Your <br />
              <span className="text-[#003C43]">Inner </span>
              <span>Peace</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ delay: 0.4 }}
              className="h-1 bg-white/50 mb-6 md:mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/90 text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed mb-8 md:mb-10 max-w-xl xl:max-w-2xl">
              Discover clarity, confidence, and emotional wellness through guided support that helps you manage stress, heal from within, and grow stronger in every aspect of your mental health journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 md:gap-6">
              <Button
                className="bg-[#134e4a] hover:bg-[#115e59] text-white rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base xl:text-lg">
                <Link to="/contact">Start A Checkup Now</Link>
              </Button>

              <button
                className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Play Video">
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
            {/* Main Image Container - Now acts as anchor for floating cards */}
            <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] mx-auto">
              <img
                src="/hero-woman-transparent (2).png"
                alt="Smiling Doctor"
                className="relative w-full h-auto object-contain z-10"
              />

              {/* Floating Call Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-6 md:top-10 -right-4 md:-right-8 lg:-right-12 xl:-right-16 bg-[#0e4853] text-white p-3 md:p-4 xl:p-5 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-2 md:gap-3 -z-10 max-w-[180px] md:max-w-[220px] xl:max-w-[260px]">
                <div className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-[#0e4853] fill-current" />
                </div>
                <div>
                  <p className="text-xs xl:text-sm text-white/80">Call us anytime</p>
                  <p className="font-bold text-base md:text-lg xl:text-xl">(555) 123-4567</p>
                </div>
              </motion.div>

              {/* Floating Review Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute bottom-16 md:bottom-20 -left-4 md:-left-8 lg:-left-12 xl:-left-16 bg-[#4a7c7c]/90 backdrop-blur-md text-white p-3 md:p-4 xl:p-5 rounded-lg md:rounded-xl shadow-lg z-20">
                <div className="text-xl md:text-2xl xl:text-3xl font-bold">
                  <NumberTicker value={4.9} decimalPlaces={1} /> /5
                </div>
                <div className="text-xs md:text-sm xl:text-base text-white/80">Review on Google</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
