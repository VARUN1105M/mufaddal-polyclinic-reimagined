import React from "react";
import { Link } from "react-router-dom";
import { Check, Smile, ThumbsUp, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NumberTicker from "@/components/ui/NumberTicker";

interface AppointmentSectionProps {
    lightMode?: boolean;
}

export default function AppointmentSection({ lightMode = false }: AppointmentSectionProps) {
    const features = [
        { text: "Women Health Awareness Programs" },
        { text: "Preventive Health Checkups" },
        { text: "Simple Guidance, No Pressure" }
    ];

    const stats = [
        { icon: Smile, value: 100, suffix: "%", label: "Trusted Care Experience", color: "bg-[#003C43]" },
        { icon: ThumbsUp, value: 10000, suffix: "+", label: "Patients Supported", color: "bg-[#245953]" },
        { icon: Users, value: 10, suffix: "+", label: "Care Specialties", color: "bg-[#408E91]" }
    ];

    return (
        <section
            className={`
        w-full py-12 md:py-16 px-4 lg:px-6 xl:px-8
        relative overflow-hidden ${lightMode ? 'text-gray-900' : 'text-white'}
      `}
            style={{
                background: lightMode ? "#ffffff" : "linear-gradient(to bottom left, #003C43, #245953, #408E91)"
            }}
        >
            {/* Soft Glow Background - Only in Dark Mode */}
            {!lightMode && (
                <>
                    <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-white/10 blur-3xl rounded-full" />
                </>
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-[4fr_4fr_1fr] gap-2 xl:gap-4 items-stretch">

                    {/* LEFT CONTENT */}
                    <AnimatedSection direction="left" className="space-y-3 pr-1">
                        <span className="text-[#64CCC5] font-semibold text-xs md:text-sm uppercase tracking-wider">
                            WHY CHOOSE US?
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                            <span className={lightMode ? "text-gray-900" : "text-white"}>Every Woman Deserves </span>
                            <span className="text-[#64CCC5]">Care</span>
                            <span className={lightMode ? "text-gray-900" : "text-white"}>,</span><br />
                            <span className={lightMode ? "text-gray-900" : "text-white"}>Understanding, </span>
                            <span className="text-[#64CCC5]">And Support</span>
                        </h2>

                        <p className={`${lightMode ? "text-gray-600" : "text-white/90"} text-base md:text-lg leading-relaxed`}>
                            We focus on health awareness programs and preventive checkups that help women understand
                            their bodies better and make informed health choices early.
                        </p>

                        {/* FEATURES */}
                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 group"
                                >
                                    <div className="
                    w-8 h-8 md:w-9 md:h-9 bg-[#245953] rounded-full flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300
                  ">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <span className={`${lightMode ? "text-gray-800" : "text-white"} text-base md:text-lg font-medium`}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA BUTTON */}
                        <div className="pt-2">
                            <Link
                                to="/contact"
                                className="
                  inline-flex items-center gap-2 bg-[#003C43]
                  hover:bg-[#245953] text-white px-6 py-3
                  rounded-full font-semibold text-base md:text-lg
                  shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105
                "
                            >
                                Make An Appointment
                                <svg
                                    className="w-5 h-5"
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
                            </Link>
                        </div>
                    </AnimatedSection>

                    {/* MIDDLE IMAGE */}
                    <AnimatedSection direction="up" delay={0.2} className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                        <img
                            src="/Appointment.png"
                            alt="Therapy Session"
                            className="w-full h-full object-cover"
                        />
                    </AnimatedSection>

                    {/* RIGHT STATS */}
                    <AnimatedSection direction="right" delay={0.4} className="flex flex-col gap-2 justify-between h-full relative z-10">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`${stat.color} rounded-2xl p-3 text-white shadow-xl 
                    hover:scale-105 transition-transform duration-300 backdrop-blur-md flex flex-col justify-center items-center flex-1 w-full
                  `}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                                        <stat.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-xl lg:text-2xl font-bold mb-0.5">
                                        <NumberTicker value={stat.value} />{stat.suffix}
                                    </div>
                                    <div className="text-[10px] lg:text-xs font-medium opacity-90">{stat.label}</div>
                                </div>
                            </div>
                        ))}

                        {/* DECORATIVE GLOWS */}
                        {!lightMode && (
                            <>
                                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#003C43]/30 rounded-full blur-2xl -z-10" />
                                <div className="absolute -top-5 -right-5 w-28 h-28 bg-[#64CCC5]/30 rounded-full blur-xl -z-10" />
                            </>
                        )}
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
}
