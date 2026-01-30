import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';

const doctors = [
  {
    name: 'Dr. Sarah Ahmed',
    specialty: 'Gynecologist',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Fatima Khan',
    specialty: 'Obstetrician',
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Aisha Patel',
    specialty: 'Women\'s Health Specialist',
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Mariam Ali',
    specialty: 'General Physician',
    experience: '8+ years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=500&fit=crop',
  },
];

const DoctorsPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-primary rounded-full text-sm font-medium mb-6">
            Our Medical Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Expert Doctors</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our team of dedicated healthcare professionals combines expertise 
            with compassion to provide you the best care.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <AnimatedSection key={doctor.name} delay={index * 0.1} direction="up">
              <div className="group relative overflow-hidden rounded-2xl bg-card card-elevated">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Social Icons */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm mb-1">
                    {doctor.specialty}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {doctor.experience} experience
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button size="lg" asChild>
            <Link to="/doctors">
              View All Doctors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DoctorsPreview;
