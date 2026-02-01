import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/home/Banner';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

/* -------------------------------------------
   FAQ SECTION COMPONENT
-------------------------------------------- */
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const faqs = [
        {
            question: 'What is mental health, and why is it important?',
            answer:
                'If you experience persistent feelings of sadness, anxiety, or stress that interfere with daily life, it may be time to seek professional support. Other signs include difficulty concentrating, changes in sleep patterns, or feelings of isolation and hopelessness.'
        },
        {
            question: 'How can I tell if I need professional mental health support?',
            answer:
                'Professional support is recommended when emotional or mental challenges begin affecting your daily functioning, relationships, work, or overall quality of life.'
        },
        {
            question: 'Are online therapy sessions effective?',
            answer:
                'Yes, research shows that online therapy can be just as effective as in-person sessions. It offers comfort and flexibility.'
        },
        {
            question: 'What can I do to improve my mental well-being daily?',
            answer:
                'Regular exercise, mindfulness, healthy eating, social connection, and proper rest help build strong emotional well-being.'
        },
        {
            question: 'Do I need a referral to join a counseling session?',
            answer:
                "In most cases, you don't need a referral. Some insurance plans may require it — check with your provider."
        },
        {
            question: 'Are online sessions as effective as in-person counseling?',
            answer:
                'Yes, many studies show online therapy can be equally effective with the right therapist and environment.'
        },
        {
            question: 'What should I expect during my first session?',
            answer:
                'Your first session includes understanding your background, goals, and challenges. It helps evaluate if the therapist is the right fit.'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
        
        .faq-section {
          font-family: 'Open Sans', sans-serif;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          opacity: 0;
        }
        
        .faq-answer.open {
          max-height: 500px;
          opacity: 1;
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }
        
        .chevron-icon.rotate {
          transform: rotate(180deg);
        }
      `}</style>

            <div className="max-w-7xl mx-auto faq-section">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

                    {/* LEFT CARD - Sticky Call to Action */}
                    <AnimatedSection direction="left" delay={0.1}>
                        <div className="lg:col-span-2">
                            <div className="bg-[#003C43] rounded-3xl p-8 md:p-10 shadow-xl sticky top-24 overflow-hidden relative">
                                {/* Decorative circles */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#408E91] rounded-full opacity-20 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#245953] rounded-full opacity-20 blur-xl"></div>

                                <div className="relative z-10">
                                    <p className="text-[#408E91] font-bold text-sm uppercase tracking-wider mb-4">
                                        FAQ SUPPORT
                                    </p>

                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                        Common Questions<br />
                                        <span className="text-[#408E91]">Answered</span>
                                    </h2>

                                    <p className="text-gray-300 text-base leading-relaxed mb-8">
                                        Can't find what you're looking for? We're here to help you navigate your mental health journey with clarity and confidence.
                                    </p>

                                    <button
                                        className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#003C43] font-bold rounded-xl shadow-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* RIGHT - ACCORDION */}
                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="lg:col-span-3 space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? 'shadow-lg ring-1 ring-[#003C43]/5'
                                        : 'shadow-sm hover:shadow-md border border-gray-100'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span
                                            className={`font-semibold text-lg pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#003C43]' : 'text-gray-800'
                                                }`}
                                        >
                                            {faq.question}
                                        </span>

                                        <div
                                            className={`chevron-icon flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index
                                                ? 'bg-[#E6F0F1] rotate'
                                                : 'bg-gray-50 group-hover:bg-[#E6F0F1]'
                                                }`}
                                        >
                                            {openIndex === index ? (
                                                <ChevronUp className="w-5 h-5 text-[#003C43]" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#003C43]" />
                                            )}
                                        </div>
                                    </button>

                                    <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                        <div className="px-6 md:px-8 pb-6 pt-0">
                                            <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </div>
    );
};

/* -------------------------------------------
   PAGE EXPORT
-------------------------------------------- */

const FaqPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="FAQs" />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
};

export default FaqPage;
