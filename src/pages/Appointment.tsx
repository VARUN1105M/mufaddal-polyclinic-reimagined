import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import PageBanner from '@/components/home/Banner';
import AppointmentSection from '@/components/home/Appointmentsection';
import Gaq from '@/components/home/Gaq';
import FAQSection from '@/components/home/Faq';

const Appointment = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="Appointment" />
                <AppointmentSection lightMode />
                <Gaq />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
};

export default Appointment;
