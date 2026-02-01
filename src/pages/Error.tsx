import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-9xl font-bold text-[#003C43]">404</h1>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Button asChild className="bg-[#003C43] hover:bg-[#245953] text-white">
                    <Link to="/">Go to Homepage</Link>
                </Button>
            </main>
            <Footer />
        </div>
    );
};

export default Error;
