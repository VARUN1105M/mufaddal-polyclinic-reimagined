import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingPlans from '@/components/home/Pricingsection';
import PageBanner from '@/components/home/Banner';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Carosel from '@/components/home/Carosel';

const Pricing = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="Pricing" />
                <PricingPlans />
                <WhyChooseUs />
                <Carosel />
            </main>
            <Footer />
        </div>
    );
};

export default Pricing;
