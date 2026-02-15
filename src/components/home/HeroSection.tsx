import { Link } from 'react-router-dom';
import { Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NumberTicker from '@/components/ui/NumberTicker';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[85vh] xl:min-h-[90vh] w-full max-w-full overflow-x-hidden bg-gradient-to-br from-[#88E8DD] to-[#408E91] flex items-end">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        .hero-title {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl 2xl:max-w-[1600px] relative z-10 pt-28 md:pt-36 lg:pt-44 xl:pt-48 pb-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-end">
          {/* Left Content */}
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            className="text-center lg:text-left self-center pb-12 lg:pb-0"
          >
            <p
              data-aos="fade"
              data-aos-delay="100"
              className="text-white font-medium tracking-wider text-[9px] sm:text-[10px] md:text-xs xl:text-sm uppercase mb-12"
            >
              <span className="text-[#003C43]">CARE WITH BALANCE, FOR LIFE</span>
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.3] mb-12 hero-title tracking-wider max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto lg:mx-0"
            >
              <div className="flex flex-col gap-6">
                <span className="block">Caring for your</span>
                <span className="block">
                  <span className="text-[#003C43]">Everyday</span>{' '}
                  <span className="text-[#ffffff]">Health</span>
                </span>
              </div>
            </h1>

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="h-1 bg-white/50 mb-12 mx-auto lg:mx-0 w-[80px]"
            />

            <p
              data-aos="fade"
              data-aos-delay="400"
              className="text-white/90 text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-xl leading-[2.4] tracking-wide mb-12 max-w-xl xl:max-w-2xl mx-auto lg:mx-0 text-left"
            >
              Build better health through preliminary checkups, early screening, and preventive care—focusing on awareness, timely guidance, and regular monitoring to reduce future risks and avoidable medical costs.            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center justify-center lg:justify-start gap-4 md:gap-5"
            >
              <Button
                className="bg-[#134e4a] hover:bg-[#115e59] text-white rounded-full px-5 md:px-7 py-4 md:py-5 text-xs sm:text-sm xl:text-base"
              >
                <Link to="/contact">Start a Checkup</Link>
              </Button>

              <button
                className="w-9 h-9 md:w-11 md:h-11 xl:w-12 xl:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Play Video"
              >
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative lg:ml-auto">
            {/* Main Image Container - Now acts as anchor for floating cards */}
            <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] mx-auto">
              <img
                src="/doctor.png"
                alt="Smiling Doctor"
                width="700"
                height="800"
                loading="eager"
                decoding="async"
                // @ts-ignore - fetchpriority is a modern browser optimization
                fetchpriority="high"
                className="relative w-full h-auto object-contain z-[1]"
              />

              {/* Floating Call Card - Adjusted position slightly down */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 lg:right-8 xl:right-16 bg-[#0e4853] text-white p-2 sm:p-3 md:p-3 xl:p-4 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-2 md:gap-3 z-20 w-[160px] sm:w-[180px] md:w-[220px] xl:w-[260px]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 xl:w-5 xl:h-5 text-[#0e4853] fill-current" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] xl:text-xs text-white/80 whitespace-nowrap uppercase tracking-wider font-semibold">Call us anytime</p>
                  <p className="font-bold text-xs sm:text-sm md:text-base xl:text-lg whitespace-nowrap">
                    +91 9840418974
                  </p>
                </div>
              </div>

              {/* Floating Review Card - No animation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-4 xl:left-8 bg-[#4a7c7c]/90 backdrop-blur-md text-white p-2 sm:p-3 md:p-4 xl:p-5 rounded-xl shadow-xl z-20 text-center min-w-[110px] sm:min-w-[130px] md:min-w-[160px]">
                <div className="text-xl sm:text-2xl md:text-2xl xl:text-3xl font-bold mb-1">
                  <NumberTicker value={4.4} decimalPlaces={1} /> /5
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs xl:text-sm text-white/90 whitespace-nowrap">
                  Reviews on Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;