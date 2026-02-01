import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Pricing = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-28 pb-16">
                <div className="container-custom">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#003C43] mb-6 text-center">Pricing Plans</h1>
                        <p className="text-center text-gray-600 max-w-2xl mx-auto">
                            Transparent pricing for our healthcare services.
                        </p>
                    </AnimatedSection>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Pricing;
