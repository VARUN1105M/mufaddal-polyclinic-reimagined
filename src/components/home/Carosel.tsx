import React, { useEffect, useRef } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
    rating: number;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Clean, well-organized, and affordable. The doctors are experienced, polite, and explain everything clearly. Highly recommended for vaccination care in North Chennai.",
        name: "Abdul Latif",
        role: "Perambur, Chennai",
        rating: 5,
        image: "/Client 1.png"
    },
    {
        id: 2,
        quote: "We urgently needed cancer medicines for a patient. The response was quick and reliable. Medicines were arranged without delay. A truly dependable service in critical moments.",
        name: "My Onko",
        role: "Cancer Care Support",
        rating: 5,
        image: "/Client 2.png"
    },
    {
        id: 3,
        quote: "Excellent medical care. The doctor was kind and attentive, staff were supportive. Minimal waiting time, clean facility, and very satisfactory service. Highly recommended.",
        name: "Thavila Fathima",
        role: "Patient",
        rating: 5,
        image: "/Client 3.png"
    },
    {
        id: 4,
        quote: "Good medical facilities with minimal waiting time. Experienced doctors provide solid guidance, and multiple payment options are available. Suitable for quick medical attention.",
        name: "Suddhanshu Singh Rajput",
        role: "Patient",
        rating: 5,
        image: "/Client 4.jpg"
    },
    {
        id: 5,
        quote: "Dr Zeenath Begum is one of the finest doctors in Chennai. Compassionate care, friendly staff, and a calm, peaceful atmosphere make the experience very comforting.",
        name: "Murtaza Sunel",
        role: "Patient",
        rating: 5,
        image: "/Client 1.png"
    },
];

const TestimonialCarousel: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollJob = setInterval(() => {
            // Calculate scroll based on the first card width + gap
            const firstCard = scrollContainer.firstElementChild as HTMLElement;
            if (!firstCard) return;

            const cardWidth = firstCard.clientWidth;
            const gap = 24; // gap-6 is 24px (1.5rem)
            const scrollAmount = cardWidth + gap;

            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            // If we are near the end, loop back to start
            if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 5000);

        return () => clearInterval(scrollJob);
    }, []);

    return (
        <section className="py-16 md:py-20 w-full" style={{ background: 'linear-gradient(to bottom, #ffffff 60%, #408E91 60%)' }}>
            <div className="px-5 md:px-6 max-w-7xl mx-auto">
                {/* Header */}
                <AnimatedSection className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
                    <div className="lg:w-3/5">
                        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#408E91' }}>
                            Client Feedbacks
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight" style={{ color: '#003C43' }}>
                            Care Begins with <br /> Being Heard
                        </h2>
                    </div>
                    <div className="lg:w-1/3">
                        <p className="text-base md:text-lg leading-relaxed text-left" style={{ color: '#245953' }}>
                            Care is not rushed it is guided with patience. Our team listens, understands concerns, and
                            offers supportive guidance to help you feel informed, reassured, and cared for at every step.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Carousel Wrapper with Scroll Snap */}
                <AnimatedSection delay={0.2}>
                    <div
                        ref={scrollRef}
                        className="flex gap-5 md:gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
                    >
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="min-w-[90%] md:min-w-[45%] lg:min-w-[31%] snap-center"
                            >
                                <div className="h-full p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl flex flex-col"
                                    style={{ borderColor: '#E8F3F2', backgroundColor: '#FFFFFF' }}>

                                    {/* Star Rating */}
                                    <div className="flex gap-1 mb-5">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#64CCC5">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-lg italic leading-relaxed mb-8 flex-grow" style={{ color: '#245953' }}>
                                        "{t.quote}"
                                    </p>

                                    {/* User Info */}
                                    <div className="flex items-center border-t pt-6 mt-auto" style={{ borderColor: '#E8F3F2' }}>
                                        <div className="w-12 h-12 rounded-full mr-4 flex-shrink-0 overflow-hidden"
                                            style={{ backgroundColor: '#003C43' }}>
                                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-base md:text-lg" style={{ color: '#003C43' }}>{t.name}</h4>
                                            <p className="text-xs uppercase tracking-wider" style={{ color: '#408E91' }}>{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    );
};

export default TestimonialCarousel;