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
    { id: 1, quote: "From the first session, I knew I was in the right place. The personalized care and constant support made a huge difference.", name: "Michael S.", role: "Producer", rating: 5, image: "/Client 1.png" },
    { id: 2, quote: "Thanks to the team, I've learned how to manage my anxiety and feel more in control of my life. I'm truly grateful.", name: "Jessica M.", role: "Digital Agency", rating: 5, image: "/Client 2.png" },
    { id: 3, quote: "The counseling sessions were a game-changer. The therapist was understanding, and I finally felt heard.", name: "David L.", role: "Product Manager", rating: 5, image: "/Client 3.png" },
    { id: 4, quote: "I joined one of their mindfulness workshops, and it helped me find a sense of calm I didn't know I could achieve.", name: "Emily R.", role: "Content Creator", rating: 5, image: "/Client 4.jpg" },
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
        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
            {/* Header */}
            <AnimatedSection className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                <div className="lg:w-3/5">
                    <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#408E91' }}>
                        Client Feedbacks
                    </p>
                    <h2 className="text-5xl md:text-6xl font-serif leading-tight" style={{ color: '#003C43' }}>
                        Healing Begins with a <br /> Conversation
                    </h2>
                </div>
                <div className="lg:w-1/3">
                    <p className="text-lg leading-relaxed" style={{ color: '#245953' }}>
                        Healing isn’t rushed—it’s supported. Our team walks beside you,
                        offering understanding and tailored support to help you rebuild.
                    </p>
                </div>
            </AnimatedSection>

            {/* Carousel Wrapper with Scroll Snap */}
            <AnimatedSection delay={0.2}>
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="min-w-[90%] md:min-w-[45%] lg:min-w-[31%] snap-center"
                        >
                            <div className="h-full p-10 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl"
                                style={{ borderColor: '#E8F3F2', backgroundColor: '#FFFFFF' }}>

                                {/* Star Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#408E91">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-xl italic leading-relaxed mb-10" style={{ color: '#245953' }}>
                                    "{t.quote}"
                                </p>

                                {/* User Info */}
                                <div className="flex items-center border-t pt-8" style={{ borderColor: '#E8F3F2' }}>
                                    <div className="w-14 h-14 rounded-full mr-4 flex-shrink-0 overflow-hidden"
                                        style={{ backgroundColor: '#003C43' }}>
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg" style={{ color: '#003C43' }}>{t.name}</h4>
                                        <p className="text-sm uppercase tracking-wider" style={{ color: '#408E91' }}>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* Custom Scrollbar Styles */}
            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    );
};

export default TestimonialCarousel;