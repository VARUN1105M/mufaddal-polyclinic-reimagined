import { Link } from 'react-router-dom';
import { Stethoscope, Pill, Users, Dumbbell, HeartPulse, Thermometer, Eye, Ear } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PageBanner from '@/components/home/Banner';
import DoctorsPreview from '@/components/home/DoctorsPreview';
import Appointment from '@/components/home/Appointmentsection';
import Carosel from '@/components/home/Carosel';
import Gaq from '@/components/home/Gaq';
import Gp from '@/components/home/Gp';

const services = [
    {
        icon: Stethoscope,
        title: 'General Health',
        description: 'Routine checkups, health screenings, and preventive care services for overall wellness.',
    },
    {
        icon: Pill,
        title: 'Chronic Care Management',
        description: 'Long-term management of chronic conditions like diabetes, hypertension, and thyroid disorders.',
    },
    {
        icon: Users,
        title: 'Family Health',
        description: 'Comprehensive healthcare services for all family members, from children to seniors.',
    },
    {
        icon: Dumbbell,
        title: 'Lifestyle Medicine',
        description: 'Nutrition counseling, fitness guidance, and wellness programs for a healthier lifestyle.',
    },
    {
        icon: HeartPulse,
        title: 'Cardiac Care',
        description: 'Heart health screenings, ECG, and management of cardiovascular conditions.',
    },
    {
        icon: Thermometer,
        title: 'Acute Care',
        description: 'Treatment for sudden illnesses, infections, and minor injuries requiring immediate attention.',
    },
    {
        icon: Eye,
        title: 'Ophthalmology',
        description: 'Eye examinations, vision testing, and treatment for common eye conditions.',
    },
    {
        icon: Ear,
        title: 'ENT Services',
        description: 'Care for ear, nose, and throat conditions including allergies and sinus problems.',
    },
];

const SupportiveCare = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="Service Detail" />
                <Gp />
            </main>
            <Footer />
        </div>
    );
};

export default SupportiveCare;
