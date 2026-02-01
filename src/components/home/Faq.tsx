import { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const colors = {
    primary: "#003C43",
    secondary: "#245953",
    tertiary: "#408E91",
  };

  const faqs = [
    {
      question: "What is mental health, and why is it important?",
      answer:
        "If you experience persistent feelings of sadness, anxiety, or stress that interfere with daily life, it may be time to seek professional support.",
    },
    {
      question: "How can I tell if I need professional mental health support?",
      answer:
        "Look for persistent changes in mood, behavior, or thinking that last more than two weeks.",
    },
    {
      question: "Are online therapy sessions effective?",
      answer:
        "Yes, research shows that online therapy can be just as effective as in-person sessions for many mental health conditions.",
    },
    {
      question: "What can I do to improve my mental well-being daily?",
      answer:
        "Small daily habits such as exercise, sleep, mindfulness, and social connections can make a big impact.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10, ${colors.tertiary}10)`
      }}
    >
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{ background: colors.secondary }}
        ></div>

        <div
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl"
          style={{ background: colors.tertiary }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <AnimatedSection direction="left" className="lg:sticky lg:top-24">
            <div className="space-y-6">
              <span
                className="font-semibold text-xs md:text-sm tracking-wider uppercase"
                style={{ color: colors.tertiary }}
              >
                FREQUENTLY ASKED QUESTION
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The <span style={{ color: colors.tertiary }}>Most Asked</span>
                <br />
                Questions We Receive
              </h2>

              {/* Rating Badge */}
              <div
                className="inline-flex items-center gap-2 text-white px-5 py-3 rounded-full shadow-lg"
                style={{ backgroundColor: colors.secondary }}
              >
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4"
                      style={{ fill: "#FFD700", color: "#FFD700" }}
                    />
                  ))}
                  {/* Half star */}
                  <Star
                    className="w-4 h-4"
                    style={{
                      fill: "#FFD700",
                      color: "#FFD700",
                      clipPath: "inset(0 50% 0 0)"
                    }}
                  />
                </div>
                <span className="font-bold text-lg">4.9 /5</span>
              </div>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
                Through consistent care and compassionate guidance, we help individuals rediscover strength, build resilience, and move forward toward a brighter, healthier future.
              </p>
            </div>
          </AnimatedSection>

          {/* Right FAQ Accordion */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "bg-white shadow-xl"
                      : "bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left transition-colors ${
                      openIndex === index
                        ? "bg-gradient-to-r"
                        : "hover:bg-white/80"
                    }`}
                    style={
                      openIndex === index
                        ? {
                            backgroundImage: `linear-gradient(90deg, ${colors.tertiary}20, ${colors.secondary}20)`
                          }
                        : {}
                    }
                  >
                    <span
                      className={`font-semibold text-base md:text-lg ${
                        openIndex === index ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index
                          ? "rotate-180"
                          : "text-gray-400"
                      }`}
                      style={{
                        color: openIndex === index ? colors.tertiary : undefined
                      }}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
    </section>
  );
};

export default FAQSection;
