import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/home/Banner';
import { serviceData } from '@/data/serviceData';
import { Navigate } from 'react-router-dom';

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

                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Features List */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-sm font-semibold mb-4 tracking-wider text-gray-500 font-sans">
                                    KEY FEATURES
                                </h3>
                                <div className="space-y-2">
                                    {data.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="w-full text-left px-4 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-[#003C43] to-[#245953] text-white"
                                        >
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="relative overflow-hidden rounded-2xl p-8 text-white bg-[#003C43]">
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm mb-2 font-sans">Need Any Help?</p>
                                    <p className="text-center text-2xl font-bold mb-6 font-sans">(555) 123-4567</p>
                                    <button className="w-full bg-white text-[#003C43] py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors font-sans">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Header */}
                            <div>
                                <h1 className="text-4xl font-bold mb-4 text-[#003C43]">{data.title}</h1>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {data.description}
                                </p>
                            </div>

                            <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-200">
                                {/* Placeholder for service image - using a generic medical placeholder if specific ones aren't available */}
                                <div className="w-full h-full bg-gradient-to-br from-[#003C43]/10 to-[#408E91]/10 flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Image for {data.title}</span>
                                </div>
                            </div>

                            {/* Detailed Description */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-[#003C43]">Why Choose Our {data.title}?</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Our {data.title} service is committed to providing top-tier medical care with a patient-centric approach.
                                    We understand that every individual is unique, which is why we offer personalized treatment plans designed
                                    to meet your specific health goals. Our team of experienced professionals uses the latest technology and
                                    evidence-based practices to ensure the best possible outcomes for you.
                                </p>

                                <h3 className="text-xl font-bold mb-3 text-[#003C43]">Benefits</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                    {data.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#408E91] shrink-0" />
                                            <span className="text-gray-600">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    We believe in empowering our patients through education and support. Whether you are seeking preventive care,
                                    management of a chronic condition, or specialized treatment, we are here to guide you every step of the way.
                                    Experience compassionate care in a state-of-the-art facility dedicated to your well-being.
                                </p>
                            </div>

                            {/* FAQ Section */}
                            <div className="space-y-3 pt-8">
                                <h2 className="text-2xl font-bold mb-6 text-[#003C43]">Frequently Asked Questions</h2>
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold pr-4 text-gray-800">
                                                {faq.question}
                                            </span>
                                            <svg
                                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openFaq === index && (
                                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                                <p className="text-gray-600 leading-relaxed text-sm">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ServiceTemplate;
