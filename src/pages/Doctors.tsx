import { Link } from 'react-router-dom';
import { Linkedin, Mail, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const doctors = [
  {
    name: 'Dr. Sarah Ahmed',
    specialty: 'Senior Gynecologist',
    experience: '15+ years',
    qualifications: 'MBBS, MD (Obstetrics & Gynecology)',
    bio: 'Dr. Sarah is a renowned gynecologist with expertise in high-risk pregnancies and minimally invasive surgeries.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Fatima Khan',
    specialty: 'Obstetrician',
    experience: '12+ years',
    qualifications: 'MBBS, DNB (Obstetrics)',
    bio: 'Specializing in prenatal care and normal deliveries, Dr. Fatima ensures safe motherhood for all her patients.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Aisha Patel',
    specialty: 'Women\'s Health Specialist',
    experience: '10+ years',
    qualifications: 'MBBS, MS, FMAS',
    bio: 'An expert in PCOS and hormonal disorders, Dr. Aisha provides holistic care for women\'s health issues.',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Mariam Ali',
    specialty: 'General Physician',
    experience: '8+ years',
    qualifications: 'MBBS, MD (Internal Medicine)',
    bio: 'Dr. Mariam specializes in preventive care and chronic disease management with a patient-centered approach.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Zainab Hussain',
    specialty: 'Fertility Specialist',
    experience: '14+ years',
    qualifications: 'MBBS, MS, Fellowship in Reproductive Medicine',
    bio: 'With expertise in fertility treatments, Dr. Zainab has helped hundreds of couples achieve their dream of parenthood.',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Nadia Sheikh',
    specialty: 'Pediatrician',
    experience: '9+ years',
    qualifications: 'MBBS, DCH, DNB (Pediatrics)',
    bio: 'Dr. Nadia provides comprehensive care for children from newborns to adolescents with warmth and expertise.',
    image: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=400&h=500&fit=crop',
  },
];

const Doctors = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-accent py-24 md:py-32">
          <div className="container-custom text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-white/10 text-secondary rounded-full text-sm font-medium mb-6">
                Our Team
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Meet Our Doctors
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Expert healthcare professionals dedicated to your well-being
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <AnimatedSection key={doctor.name} delay={index * 0.1} direction="up">
                  <div className="group bg-card rounded-2xl overflow-hidden card-elevated">
                    {/* Image */}
                    <div className="aspect-[4/5] overflow-hidden relative">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Social Links */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-secondary font-medium text-sm mb-3">
                        {doctor.specialty}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{doctor.qualifications}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Award className="w-4 h-4" />
                        <span>{doctor.experience} experience</span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {doctor.bio}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                Book a Consultation
              </h2>
              <p className="text-primary/80 text-lg mb-8 max-w-xl mx-auto">
                Schedule an appointment with our expert doctors today.
              </p>
              <Button size="xl" className="bg-primary text-primary-foreground rounded-full" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
