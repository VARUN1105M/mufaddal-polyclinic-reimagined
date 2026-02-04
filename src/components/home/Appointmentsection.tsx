import React from "react";
import { Link } from "react-router-dom";
import { Check, Smile, ThumbsUp, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface AppointmentSectionProps {
    lightMode?: boolean;
}

export default function AppointmentSection({ lightMode = false }: AppointmentSectionProps) {
    const features = [
        { text: "Compassionate & Experienced Professionals" },
        { text: "Holistic Approach To Well-Being" },
        { text: "Safe & Supportive Environment" }
    ];

    const stats = [
        { icon: Smile, value: "100%", label: "Satisfaction", color: "bg-[#003C43]" },
        { icon: ThumbsUp, value: "257+", label: "Happy Patient", color: "bg-[#245953]" },
        { icon: Users, value: "10+", label: "Expert Therapist", color: "bg-[#408E91]" }
    ];

    return (
        <section
            className={`
        w-full py-20 md:py-28 px-6 lg:px-10 xl:px-16
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
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <AnimatedSection direction="left" className="space-y-8">
                        <span className="text-[#64CCC5] font-semibold text-sm md:text-base uppercase tracking-wider">
                            WHY CHOOSE US?
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            <span className={lightMode ? "text-gray-900" : "text-white"}>Restoring </span>
                            <span className="text-[#64CCC5]">Hope</span>
                            <span className={lightMode ? "text-gray-900" : "text-white"}>, One</span><br />
                            <span className={lightMode ? "text-gray-900" : "text-white"}>Day </span>
                            <span className="text-[#64CCC5]">At A Time</span>
                        </h2>

                        <p className={`${lightMode ? "text-gray-600" : "text-white/90"} text-lg md:text-xl leading-relaxed max-w-xl`}>
                            Through consistent care and compassionate guidance, we help individuals
                            rediscover strength, build resilience, and move toward a brighter, healthier future.
                        </p>

                        {/* FEATURES */}
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="
                    w-11 h-11 bg-[#245953] rounded-full flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300
                  ">
                                        <Check className="w-6 h-6 text-white" strokeWidth={3} />
                                    </div>
                                    <span className={`${lightMode ? "text-gray-800" : "text-white"} text-lg md:text-xl font-medium`}>
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
                  inline-flex items-center gap-3 bg-[#003C43]
                  hover:bg-[#245953] text-white px-10 py-4
                  rounded-full font-semibold text-lg
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

                    {/* RIGHT SECTION */}
                    <AnimatedSection direction="right" delay={0.2} className="flex flex-col xl:flex-row items-stretch gap-8 relative z-10">

                        {/* IMAGE */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md w-full">
                            <img
                                src="/Appointment.png"
                                alt="Therapy Session"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* STATS */}
                        <div className="flex flex-col sm:flex-row xl:flex-col gap-5 w-full xl:w-auto">

                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`${stat.color} rounded-2xl px-6 py-6 text-white shadow-xl 
                    hover:scale-105 transition-transform duration-300 backdrop-blur-md flex-1
                  `}
                                >
                                    <div className="flex flex-col items-center text-center min-w-[150px]">

                                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
                                            <stat.icon className="w-7 h-7 text-white" />
                                        </div>

                                        <div className="text-4xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-sm font-medium opacity-90">{stat.label}</div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* DECORATIVE GLOWS - Dark mode only for simplicity, or adjusted colors */}
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
