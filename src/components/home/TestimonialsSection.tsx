import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Regular Patient',
    content: 'The care I received at Mufaddal Polyclinic was exceptional. The doctors took time to understand my concerns and provided personalized treatment. I highly recommend their women\'s health services.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop',
  },
  {
    name: 'Fatima Begum',
    role: 'New Mother',
    content: 'From prenatal care to delivery, the team at Mufaddal was with me every step. Their supportive approach made my pregnancy journey smooth and stress-free. Forever grateful!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&fit=crop',
  },
  {
    name: 'Anika Patel',
    role: 'PCOS Patient',
    content: 'After struggling with PCOS for years, I finally found relief at Mufaddal Polyclinic. Their holistic approach to treatment has transformed my quality of life. Thank you!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-muted/50 overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Patient Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Patients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from real patients who trusted us with their health.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-xl relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-secondary/30" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-secondary/30"
                  />
                </div>
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[current].content}"
                  </p>
                  
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? 'bg-primary w-8' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
