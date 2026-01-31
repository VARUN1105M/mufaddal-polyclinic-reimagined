import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function OurSpecialist() {
    const therapists = [
        {
            id: 1,
            name: 'Ubeid Una',
            role: 'Psychologist',
            image: '/doctor1.png',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#'
            }
        },
        {
            id: 2,
            name: 'Hafsha Jasmine',
            role: 'Psychologist',
            image: '/doctor2.png',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#'
            }
        },
        {
            id: 3,
            name: 'Farina Amira',
            role: 'Psychologist',
            image: '/doctor3.png',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#'
            }
        },
        {
            id: 4,
            name: 'Idayati Ilyas',
            role: 'Psychologist',
            image: '/doctor4.png',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#'
            }
        }
    ];

    return (
        <section className="w-full bg-gradient-to-b from-white to-[#408E91]/10 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[#003C43] text-sm md:text-base font-semibold uppercase tracking-wider mb-4 block">
                        OUR SPECIALIST
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003C43]">
                        Meet Our Senior Therapist
                    </h2>
                </div>

                {/* Therapist Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {therapists.map((therapist) => (
                        <div
                            key={therapist.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-[400px] md:h-[450px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={therapist.image}
                                    alt={therapist.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#003C43]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Bottom Info Card */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[85%] bg-[#003C43] rounded-t-3xl px-6 py-6 text-center shadow-xl">
                                <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                                    {therapist.name}
                                </h3>

                                <p className="text-white/80 text-sm md:text-base mb-4">
                                    {therapist.role}
                                </p>

                                {/* Social Icons */}
                                <div className="flex items-center justify-center gap-3">
                                    <a
                                        href={therapist.social.facebook}
                                        className="w-10 h-10 rounded-lg bg-[#408E91]/30 hover:bg-[#408E91]/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5 text-white" />
                                    </a>

                                    <a
                                        href={therapist.social.twitter}
                                        className="w-10 h-10 rounded-lg bg-[#408E91]/30 hover:bg-[#408E91]/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="w-5 h-5 text-white" />
                                    </a>

                                    <a
                                        href={therapist.social.linkedin}
                                        className="w-10 h-10 rounded-lg bg-[#408E91]/30 hover:bg-[#408E91]/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12 md:mt-16">
                    <button className="bg-[#003C43] hover:bg-[#245953] text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        View All Therapists
                    </button>
                </div>

            </div>
        </section>
    );
}
