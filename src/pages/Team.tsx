import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PageBanner from '@/components/home/Banner';
import DoctorsPreview from '@/components/home/DoctorsPreview';

const Team = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="Doctors" />
                <DoctorsPreview />
            </main>
            <Footer />
        </div>
    );
};

export default Team;
