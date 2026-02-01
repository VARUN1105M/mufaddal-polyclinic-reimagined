import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Team = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-28 pb-16">
                <div className="container-custom">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#003C43] mb-6 text-center">Our Team</h1>
                        <p className="text-center text-gray-600 max-w-2xl mx-auto">
                            Meet our dedicated medical professionals.
                        </p>
                    </AnimatedSection>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Team;
