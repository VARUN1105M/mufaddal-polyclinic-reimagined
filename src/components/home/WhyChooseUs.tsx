import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from '@/components/ui/AnimatedSection';
import NumberTicker from '@/components/ui/NumberTicker';

export default function HowWeWork() {
  const steps = [
    {
      number: 1,
      title: "Listen & Understand",
      description:
        "Every woman's health concern is unique. We take time to understand symptoms, lifestyle, and changes without rushing decisions.",
    },
    {
      number: 2,
      title: "Plan Preventive Care",
      description:
        "From menstrual concerns to yearly checkups, we guide women toward timely care that helps avoid future complications.",
    },
    {
      number: 3,
      title: "Support Through Stages",
      description:
        "Supporting women with continuity of care that adapts to changing health needs over time.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#003C43] via-[#245953] to-[#003C43] py-16 md:py-20 xl:py-24 px-4 text-white relative overflow-hidden">
      {/* Animated Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#408E91]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-white/10 blur-3xl rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#245953]/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl 2xl:max-w-[1600px] relative">
        {/* Header Section */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center mb-12 md:mb-16 xl:mb-20">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-5">
            <div className="inline-block">
              <span className="text-xs md:text-sm xl:text-base font-bold text-[#64CCC5] tracking-widest uppercase px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                How We Work
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug lg:leading-normal">
              Here For Women's{" "}
              <span className="text-[#64CCC5] relative inline-block">
                Health
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#64CCC5]/30 -z-10"></span>
              </span>
              ,{" "}
              Here For{" "}
              <span className="text-[#64CCC5]">Everyday Care</span>
            </h2>
          </div>
          {/* Right Content */}
          <div className="flex flex-col items-start lg:items-end space-y-6">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 max-w-xl lg:text-right">
              We focus on preventive women care, combining health awareness and timely guidance to
              support better decisions across every stage of life.
            </p>

            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-[#408E91] hover:bg-[#64CCC5] transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-[#64CCC5]/50 text-sm md:text-base overflow-hidden"
            >
              <span className="relative z-10">Get Consult Now</span>
              <svg
                className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-[#64CCC5] to-[#408E91] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </AnimatedSection>

        {/* Divider with Gradient */}
        <div className="relative w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16 md:mb-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#64CCC5] rounded-full animate-pulse"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-[#64CCC5]/50 shadow-xl hover:shadow-2xl hover:shadow-[#64CCC5]/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Number Background */}
              <div className="absolute top-4 right-4 text-8xl md:text-9xl font-black text-white/5 leading-none select-none group-hover:text-[#64CCC5]/10 transition-colors duration-500">
                {String(step.number).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl font-extrabold text-[#64CCC5] group-hover:scale-110 transition-transform duration-300">
                    <NumberTicker value={step.number} minimumIntegerDigits={2} />
                  </span>
                  <div className="h-12 w-px bg-gradient-to-b from-[#64CCC5] to-transparent"></div>
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#64CCC5] transition-colors duration-300">
                  {step.title}
                </h4>

                <p className="text-sm md:text-base leading-relaxed text-white/80 group-hover:text-white transition-colors duration-300 text-justify">
                  {step.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#64CCC5] via-[#408E91] to-[#245953] group-hover:w-full transition-all duration-700 rounded-b-3xl"></div>

              {/* Corner Decoration */}
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-[#64CCC5]/0 group-hover:border-[#64CCC5]/50 rounded-tr-3xl transition-all duration-500"></div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}