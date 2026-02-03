import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PageBanner from '@/components/home/Banner';
import Therapist from '@/components/home/Therapist';

const Team = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="Doctors" />
                <Therapist showAll />
            </main>
            <Footer />
        </div>
    );
};

export default Team;
