import React, { useState } from 'react';

const GroupCounselingPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const services = [
        'Individual Therapy',
        'Group Counseling',
        'Stress Management Workshops',
        'Mindfulness & Meditation Classes',
        'Career & Life Coaching',
        'Crisis Support Services'
    ];

    const supportGroups = [
        'Anxiety Support Group',
        'Depression Recovery Group',
        'Stress Management Group',
        'Grief and Loss Support Group',
        'Emotional Resilience Building Group',
        'Trauma Healing Group',
        'Self-Esteem Improvement Group'
    ];

    const faqs = [
        {
            question: 'What is mental health, and why is it important?',
            answer: 'If you experience persistent feelings of sadness, anxiety, or stress that interfere with daily life, it may be time to seek support. A therapist can help you better understand the circumstances and foster healthy coping mechanisms. Therapy is never a sign of weakness; rather, it\'s a mark of strength, a step towards patterns, or feelings of isolation and hopelessness.'
        },
        {
            question: 'How can I tell if I need professional mental health support?',
            answer: 'Professional support is recommended when emotional or mental challenges begin affecting your daily functioning, relationships, work, or overall quality of life.'
        },
        {
            question: 'Are online therapy sessions effective?',
            answer: 'Yes, research shows that online therapy can be just as effective as in-person sessions for many mental health concerns, offering flexibility and accessibility.'
        },
        {
            question: 'What can I do to improve my mental well-being daily?',
            answer: 'Regular exercise, adequate sleep, mindfulness practices, social connections, and healthy eating habits all contribute to better mental well-being.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Spectral', 'Georgia', serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;600;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-btn:hover {
          transform: translateX(8px);
        }

        .detail-card {
          transition: all 0.3s ease;
        }

        .detail-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .faq-item {
          transition: all 0.3s ease;
        }

        .contact-card {
          position: relative;
          overflow: hidden;
          background-image: url('/CTA.png');
          background-size: cover;
          background-position: center;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 60, 67, 0.85);
          z-index: 1;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }

        .group-list-item {
          position: relative;
          padding-left: 1.5rem;
        }

        .group-list-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background: #408E91;
          border-radius: 50%;
        }

        .expand-icon {
          transition: transform 0.3s ease;
        }

        .expand-icon.open {
          transform: rotate(180deg);
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Service List */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="text-sm font-semibold mb-4 tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}>
                                Service List
                            </h3>
                            <div className="space-y-2">
                                {services.map((service, index) => (
                                    <button
                                        key={index}
                                        className="service-btn w-full text-left px-4 py-3 rounded-full text-sm font-medium"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            background: 'linear-gradient(135deg, #003C43 0%, #245953 100%)',
                                            color: '#fff'
                                        }}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Service Details */}
                        <div className="space-y-3">
                            <div className="detail-card bg-white rounded-xl p-4 shadow-sm flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#003C43] flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Service Detail</p>
                                        <p className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>15MB</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>

                            <div className="detail-card bg-white rounded-xl p-4 shadow-sm flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#003C43] flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Features Detail</p>
                                        <p className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>24KB</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="contact-card rounded-2xl p-8 text-white relative">
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <p className="text-center text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Need Any Help?</p>
                                <p className="text-center text-2xl font-bold mb-6">(555) 123-4567</p>
                                <button className="w-full bg-white text-[#003C43] py-3 rounded-full font-semibold hover:bg-[#408E91]/10 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    Or Make An Appointment
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header */}
                        <div>
                            <h1 className="text-4xl font-bold mb-4" style={{ color: '#003C43' }}>Group Counseling</h1>
                            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                Offers a rich space to communicate thoughts, process emotions, and find supportive solutions.
                                In the group therapy, you can share personal experiences with a professional and empathetic moderator when
                                individuals can openly discuss their lives, learn healthy coping mechanisms, and understand that they are
                                not alone in their struggles with constant care and nurture.
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/Group Conseling Detail.png"
                                alt="Group Counseling Session"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                Provides understanding and encouragement through shared experiences, helping individuals rediscover
                                hope and potential strength. Through guided conversations and interventions, members are encouraged
                                to develop healthier approaches to thinking, talking, and dealing with their issues, fostering recovery, strength,
                                openness, and resiliency. Ultimately, group counseling helps individuals finding out their coping strategies to
                                open doors towards healing and growth.
                            </p>

                            <h2 className="text-2xl font-bold mb-4" style={{ color: '#003C43' }}>What We Do In Counseling</h2>
                            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                In group counseling, members share experiences and feelings, responses with peers who have similar, provide
                                a support network of empathy and encouragement. A therapist guides members in the group, assists in a safe
                                environment where people can express feelings, emotions, and thoughts. The therapist provides clinical support and
                                understanding our community.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                Promotes together in 6-8 folks through stimulus courses, peer support, and effective strategies to
                                encounter as cones of life.
                            </p>

                            <h2 className="text-2xl font-bold mb-4" style={{ color: '#003C43' }}>Let Us Supporting You</h2>
                            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                Create a compassionate environment where healing begins with shared stories, emotional validation, and
                                gentle guidance. Designed to help individuals navigate trauma, overcome challenges and enhance like. this group
                                counseling is specially personalized for those seeking connection, support and meaningful results in their journey
                                with others on similar journey.
                            </p>
                        </div>

                        {/* Support Groups List */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <div className="space-y-4">
                                {supportGroups.map((group, index) => (
                                    <div key={index} className="group-list-item text-gray-700 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                        {group}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                Group therapy enables people to see themselves through the strength, insights, and diverse ways of thinking,
                                regulate emotions, and handle life's challenges with a renewed sense of control and confidence.
                                Strengthen bonds over stressmby reaching help, improving self-awareness, and fostering a supportive
                                group environment.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item bg-white rounded-xl overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                        style={{
                                            background: index === 0 ? 'linear-gradient(135deg, #003C43 0%, #245953 100%)' :
                                                openFaq === index ? '#F3F4F6' : '#fff'
                                        }}
                                    >
                                        <span className="font-semibold pr-4" style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            color: index === 0 ? '#fff' : '#1F2937'
                                        }}>
                                            {faq.question}
                                        </span>
                                        <svg
                                            className={`expand-icon w-5 h-5 flex-shrink-0 ${openFaq === index ? 'open' : ''}`}
                                            style={{ color: index === 0 ? '#fff' : '#6B7280' }}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 py-4 bg-white border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
        </div>
    );
};

export default GroupCounselingPage;