import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PageBanner from '@/components/home/Banner';
import BlogPostDetail from '@/components/home/details';

const BlogDetail = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="Blog Detail" />
                <BlogPostDetail />
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetail;
