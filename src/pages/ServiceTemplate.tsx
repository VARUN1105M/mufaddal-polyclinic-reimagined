import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/home/Banner';
import { serviceData } from '@/data/serviceData';
import { Navigate } from 'react-router-dom';
import AnimatedSection from '@/components/ui/AnimatedSection';
interface ServiceTemplateProps {
    serviceId: string;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ serviceId }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const data = serviceData[serviceId];

    if (!data) {
        return <Navigate to="/404" replace />;
    }

    // Generic FAQs that work for most medical services
    const faqs = [
        {
            question: `What should I expect during my first ${data.title} visit?`,
            answer: `During your first visit for ${data.title}, our specialists will conduct a comprehensive assessment, discuss your medical history, and create a personalized care plan tailored to your specific needs.`
        },
        {
            question: 'Do I need a referral to book an appointment?',
            answer: 'For most of our services, you do not need a referral. You can book an appointment directly with our specialists. However, check with your insurance provider for their specific requirements.'
        },
        {
            question: 'How long do the treatments usually take?',
            answer: 'Treatment duration varies depending on the specific condition and procedure. Your doctor will provide a detailed timeline during your consultation.'
        },
        {
            question: 'Are there any side effects to the treatments?',
            answer: 'Our team prioritizes your safety. We will discuss any potential side effects and risks associated with your treatment plan before proceeding.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
                <PageBanner title={data.title} />

                <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                        {/* Left Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Features List */}
                            <AnimatedSection direction="right" delay={0.1}>
                                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                    <h3 className="text-sm font-bold mb-6 tracking-widest text-[#408E91] uppercase">
                                        KEY FEATURES
                                    </h3>
                                    <div className="space-y-3">
                                        {data.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="w-full text-left px-5 py-4 rounded-2xl text-sm font-semibold bg-gradient-to-r from-[#003C43] to-[#245953] text-white shadow-md hover:scale-[1.02] transition-transform duration-300"
                                            >
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Contact Card */}
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="relative overflow-hidden rounded-3xl p-10 text-white bg-gradient-to-br from-[#003C43] to-[#245953] shadow-2xl">
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <p className="text-center text-sm mb-2 opacity-90 uppercase tracking-widest">Need Any Help?</p>
                                        <p className="text-center text-3xl font-black mb-8">+91 9840418974</p>
                                        <button className="w-full bg-white text-[#003C43] py-4 rounded-full font-bold hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-white/20 active:scale-95 uppercase tracking-wider text-sm">
                                            Book Appointment
                                        </button>
                                    </div>
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Header */}
                            <AnimatedSection direction="up" delay={0.1}>
                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#003C43] leading-tight">
                                        {data.title}
                                    </h1>
                                    <p className="text-gray-600 leading-[1.8] text-lg lg:text-xl text-justify">
                                        {data.description}
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection direction="up" delay={0.2}>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video bg-gray-100 group border-8 border-white">
                                    {data.image ? (
                                        <>
                                            {/* Skeleton / Placeholder while loading */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse z-0" />

                                            <img
                                                src={data.image}
                                                alt={data.title}
                                                className="relative w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 z-10 opacity-0 data-[loaded=true]:opacity-100"
                                                loading="eager"
                                                onLoad={(e) => {
                                                    (e.target as HTMLImageElement).setAttribute('data-loaded', 'true');
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#003C43]/10 to-[#408E91]/10 flex items-center justify-center">
                                            <span className="text-gray-400 font-medium">Image for {data.title}</span>
                                        </div>
                                    )}
                                </div>
                            </AnimatedSection>

                            {/* Detailed Description */}
                            <AnimatedSection direction="up" delay={0.3}>
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 text-[#003C43] flex items-center gap-3">
                                            <span className="w-8 h-1 bg-[#408E91] rounded-full"></span>
                                            Why Choose Our {data.title}?
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                            Our {data.title} service is committed to providing top-tier medical care with a patient-centric approach.
                                            We understand that every individual is unique, which is why we offer personalized treatment plans designed
                                            to meet your specific health goals. Our team of experienced professionals uses the latest technology and
                                            evidence-based practices to ensure the best possible outcomes for you.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-50">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-[#003C43]">Our Benefits</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                We prioritize your long-term health through guided expertise and empathetic care.
                                            </p>
                                        </div>
                                        <ul className="space-y-4">
                                            {data.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start gap-4 group">
                                                    <div className="mt-1 w-6 h-6 rounded-full bg-[#408E91]/10 flex items-center justify-center shrink-0 group-hover:bg-[#408E91] transition-colors duration-300">
                                                        <svg className="w-3.5 h-3.5 text-[#408E91] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-700 font-medium text-lg leading-snug">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed text-lg text-justify border-l-4 border-[#003C43] pl-6 py-2 italic font-medium">
                                        We believe in empowering our patients through education and support. Whether you are seeking preventive care,
                                        management of a chronic condition, or specialized treatment, we are here to guide you every step of the way.
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* FAQ Section */}
                            <AnimatedSection direction="up" delay={0.4}>
                                <div className="space-y-6 pt-12">
                                    <div className="text-center md:text-left mb-10">
                                        <h2 className="text-3xl font-bold text-[#003C43]">Frequently Asked Questions</h2>
                                        <div className="h-1.5 w-20 bg-[#408E91] mt-4 rounded-full mx-auto md:mx-0"></div>
                                    </div>
                                    <div className="grid gap-4">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-[#408E91]/30 transition-all duration-300">
                                                <button
                                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                                    className="w-full px-8 py-5 flex items-center justify-between text-left transition-colors"
                                                >
                                                    <span className="font-bold pr-4 text-gray-800 text-lg">
                                                        {faq.question}
                                                    </span>
                                                    <div className={`p-2 rounded-lg bg-gray-50 text-[#408E91] transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-[#408E91] text-white' : ''}`}>
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </button>
                                                {openFaq === index && (
                                                    <div className="px-8 pb-6 pt-2 bg-white">
                                                        <p className="text-gray-600 leading-relaxed text-lg animate-fade-in">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};


export default ServiceTemplate;
