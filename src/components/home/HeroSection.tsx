import { Link } from 'react-router-dom';
import { Phone, Star } from 'lucide-react';
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
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            className="text-center lg:text-left self-center pb-12 lg:pb-20 xl:pb-24"
          >
            <p
              data-aos="fade"
              data-aos-delay="100"
              className="text-white font-medium tracking-wider text-xs md:text-sm xl:text-base uppercase mb-3 md:mb-4"
            >
              <span className="text-[#003C43]">CARE WITH BALANCE, FOR LIFE</span>
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight mb-4 md:mb-6 font-display"
            >
              Caring for Your <br />
              <span className="text-[#003C43]">Inner</span>{' '}
              <span className="text-[#ffffff]">Wellbeing</span>
            </h1>

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="h-1 bg-white/50 mb-6 md:mb-8 mx-auto lg:mx-0 w-[100px]"
            />

            <p
              data-aos="fade"
              data-aos-delay="400"
              className="text-white/90 text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed mb-8 md:mb-10 max-w-xl xl:max-w-2xl mx-auto lg:mx-0 text-justify"
            >
              Build clarity, confidence, and balance through preventive mental wellbeing care and guided support, focusing on awareness, early attention, and wellbeing to reduce long-term stress, risks, and avoidable costs.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center justify-center lg:justify-start gap-4 md:gap-6"
            >
              <Button
                className="bg-[#134e4a] hover:bg-[#115e59] text-white rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base xl:text-lg"
              >
                <Link to="/contact">Start a Checkup</Link>
              </Button>

              <button
                className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Play Video"
              >
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
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

              {/* Floating Call Card - No animation */}
              <div className="absolute top-[1rem] -right-4 sm:top-[1.5rem] sm:-right-2 md:top-[2rem] md:right-0 lg:top-[2.5rem] lg:right-4 xl:top-[3rem] xl:right-8 2xl:top-[-4rem] 2xl:right-[6rem] bg-[#0e4853] text-white p-2 sm:p-3 md:p-4 xl:p-5 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-2 md:gap-3 z-20 w-[160px] sm:w-[180px] md:w-[220px] xl:w-[260px]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-[#0e4853] fill-current" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs xl:text-sm text-white/80 whitespace-nowrap">Call us anytime</p>
                  <p className="font-bold text-sm sm:text-base md:text-lg xl:text-xl whitespace-nowrap">
                    +91 9840418974
                  </p>
                </div>
              </div>

              {/* Floating Review Card - No animation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-4 md:-left-6 lg:-left-8 bg-[#4a7c7c]/90 backdrop-blur-md text-white p-3 sm:p-4 md:p-5 xl:p-6 rounded-xl shadow-xl z-20 text-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px]">
                <div className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-bold mb-1">
                  <NumberTicker value={4.9} decimalPlaces={1} /> /5
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm xl:text-base text-white/90 whitespace-nowrap">
                  <NumberTicker value={1200} />+ Google Reviews
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