import React from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import NumberTicker from '@/components/ui/NumberTicker';

const PricingPlans = () => {
    const plans = [
        {
            name: 'Basic Plan',
            price: 49,
            description: 'Creates a compassionate environment where healing begins with shared stories, emotional validation, and gentle guidance.',
            features: [
                'Access to group counseling sessions (twice a month)',
                'Unlimited access to self-help resources',
                'Weekly guided meditation and mindfulness exercises',
                '24/7 support via chat and email'
            ],
            isPopular: false
        },
        {
            name: 'Standard Plan',
            price: 99,
            description: 'Strengthens inner stability by teaching coping skills, improving self-awareness, and fostering a supportive group dynamic.',
            features: [
                'Everything in Basic Plan',
                'One-on-one counseling session (once a month)',
                'Personalized mental wellness plan',
                'Priority response from mental health professionals'
            ],
            isPopular: true
        },
        {
            name: 'Premium Plan',
            price: 149,
            description: 'Focuses on emotional recovery through trauma-informed care, building trust, and nurturing personal growth in a safe setting.',
            features: [
                'Everything in Standard Plan',
                'Weekly one-on-one counseling sessions',
                'Access to exclusive workshops and webinars',
                'Direct access to expert therapists anytime',
                'Ongoing progress tracking and feedback'
            ],
            isPopular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-neutral-100 py-20 px-4">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Work+Sans:wght@400;500;600;700&display=swap');
        
        .pricing-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pricing-card:hover {
          transform: translateY(-8px);
        }

        /* Popular Card NEW Gradient: Primary → Secondary → Neutral */
        .popular-card {
          background: linear-gradient(135deg, #003C43 0%, #245953 50%, #408E91 100%);
          position: relative;
        }

        /* Feature dots */
        .feature-item {
          position: relative;
          padding-left: 1.75rem;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }

        .feature-item:nth-child(1) { animation-delay: 0.1s; }
        .feature-item:nth-child(2) { animation-delay: 0.2s; }
        .feature-item:nth-child(3) { animation-delay: 0.3s; }
        .feature-item:nth-child(4) { animation-delay: 0.4s; }
        .feature-item:nth-child(5) { animation-delay: 0.5s; }

        .feature-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 10px;
          height: 10px;
          background: #408E91; /* Neutral */
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(64, 142, 145, 0.25);
        }

        /* Popular card bullets */
        .popular-card .feature-item::before {
          background: white;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Price gradient = Neutral → Primary */
        .price-tag {
          font-family: 'Lora', serif;
          font-weight: 700;
          background: linear-gradient(135deg, #408E91 0%, #003C43 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .popular-card .price-tag {
          background: linear-gradient(135deg, #ffffff 0%, #dff5f2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Buttons */
        .select-btn {
          position: relative;
          overflow: hidden;
          background: #003C43; /* Primary */
          transition: all 0.3s ease;
        }

        .select-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .select-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        /* Popular Badge */
        .badge {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          background: #003C43; /* Primary */
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <AnimatedSection direction="fade" delay={0.1}>
                    <div className="text-center mb-16">
                        <p
                            className="text-sm font-semibold tracking-wider mb-3"
                            style={{ fontFamily: "'Work Sans', sans-serif", color: '#6B7280', letterSpacing: '0.15em' }}
                        >
                            PRICING PLAN
                        </p>
                        <h1
                            className="text-5xl font-bold mb-4"
                            style={{ fontFamily: "'Lora', serif", color: '#003C43' }}
                        >
                            Affordable Plans for<br />a Healthier Mind
                        </h1>
                    </div>
                </AnimatedSection>


                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <AnimatedSection
                            key={index}
                            direction="scale"
                            delay={0.2 + (index * 0.1)}
                        >
                            <div
                                className={`pricing-card rounded-3xl p-8 ${plan.isPopular ? 'popular-card shadow-2xl text-white' : 'bg-white shadow-lg'
                                    } relative`}
                            >
                                {/* Popular Badge */}
                                {plan.isPopular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div
                                            className="badge text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg"
                                            style={{ fontFamily: "'Work Sans', sans-serif" }}
                                        >
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3
                                    className="text-2xl font-bold mb-6"
                                    style={{ fontFamily: "'Lora', serif" }}
                                >
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="price-tag text-6xl">
                                        $<NumberTicker value={plan.price} />
                                    </span>
                                    <span
                                        className="text-lg ml-2"
                                        style={{ fontFamily: "'Work Sans', sans-serif", color: plan.isPopular ? 'rgba(255,255,255,0.9)' : '#6B7280' }}
                                    >
                                        /Month
                                    </span>
                                </div>

                                {/* Description */}
                                <p
                                    className="mb-8 leading-relaxed"
                                    style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '0.95rem', color: plan.isPopular ? 'rgba(255,255,255,0.9)' : '#6B7280' }}
                                >
                                    {plan.description}
                                </p>

                                {/* Features */}
                                <h4
                                    className="font-semibold mb-6"
                                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                                >
                                    What We Offer ?
                                </h4>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIndex) => (
                                        <div
                                            key={fIndex}
                                            className="feature-item text-sm leading-relaxed"
                                            style={{
                                                fontFamily: "'Work Sans', sans-serif",
                                                color: plan.isPopular ? 'rgba(255,255,255,0.95)' : '#4B5563'
                                            }}
                                        >
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <button
                                    className="select-btn w-full py-4 rounded-full font-semibold text-white relative z-10"
                                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                                >
                                    Select Plan
                                </button>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PricingPlans;
