import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/home/Banner';
import DoctorsPreview from '@/components/home/DoctorsPreview';

const Doctors = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="Our Doctors" />
                <DoctorsPreview />
            </main>
            <Footer />
        </div>
    );
};

export default Doctors;
