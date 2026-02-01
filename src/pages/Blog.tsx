import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/home/Banner';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            category: 'Depression',
            date: { day: '27', month: 'Mar' },
            title: 'The Role of Self-Care in Reducing Stress Levels',
            excerpt:
                'Participants learn to identify stress triggers and replace negative responses with practical, mindful strategies. Designed to help individuals navigate a compassionate and confidential environment where individuals can openly discuss their fears, learn healthy coping mechanisms, and understand that they are not alone in their struggles with constant worry and unease...',
            image: '/blog1.png',
            link: '/blog/self-care-stress'
        },
        {
            id: 2,
            category: 'Anxiety',
            date: { day: '17', month: 'Feb' },
            title: 'Simple Steps to Build Emotional Resilience Daily',
            excerpt:
                'This group provides a compassionate and confidential environment where individuals can openly stories, members are encouraged to reconnect with themselves and others, gradually rebuilding emotional strength, motivation, and hope in a supportive and safe space promises healing and personal...',
            image: '/blog2.png',
            link: '/blog/emotional-resilience'
        },
        {
            id: 3,
            category: 'Wellness',
            date: { day: '06', month: 'Jan' },
            title: 'Signs You Might Need Professional Mental Health Support',
            excerpt:
                'Through guided conversations and shared stories, members learn to identify stress triggers and replace negative responses with practical, mindful strategies, all while benefiting from the encouragement and accountability of a supportive and understanding peer community...',
            image: '/blog3.png',
            link: '/blog/mental-health-support'
        },
        {
            id: 4,
            category: 'Mindfulness',
            date: { day: '06', month: 'Jan' },
            title: 'Mindfulness Practices to Improve Mental Well-Being',
            excerpt:
                'Designed to help individuals navigate the complex emotions that follow a loss, this group offers comfort, empathy, and guidance through meaningful dialogue, shared remembrance, and connection with others on a similar journey...',
            image: '/Blog4.png',
            link: '/blog/mindfulness-practices'
        },
        {
            id: 5,
            category: 'Depression',
            date: { day: '06', month: 'Jan' },
            title: 'Effective Strategies to Overcome Negative Thinking Patterns',
            excerpt:
                'Focusing on personal empowerment and mental flexibility, this group helps individuals develop inner strength, regulate emotions, and handle life\'s challenges with a renewed sense of control and self confidence to a new chapter...',
            image: '/Blog5.png',
            link: '/blog/overcome-negative-thinking'
        },
        {
            id: 6,
            category: 'Anxiety',
            date: { day: '06', month: 'Jan' },
            title: 'How to Manage Anxiety in Everyday Life',
            excerpt:
                'Guided by trauma-informed professionals, this group creates a safe and empowering space where participants can process painful experiences, rebuild trust in themselves and others, and take meaningful steps toward long-term recovery...',
            image: '/Blog6.png',
            link: '/blog/manage-anxiety'
        }
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageBanner title="Blog" />

                <section className="w-full bg-gradient-to-b from-white to-[#408E91]/10 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Blog Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {blogs.map((blog) => (
                                <Link
                                    key={blog.id}
                                    to={blog.link}
                                    className="group bg-white rounded-3xl overflow-hidden border-2 border-[#408E91]/20 hover:border-[#408E91] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-block bg-[#003C43] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                                                {blog.category}
                                            </span>
                                        </div>

                                        {/* Date Badge */}
                                        <div className="absolute bottom-4 left-4 bg-[#245953] text-white rounded-xl px-4 py-3 text-center shadow-lg">
                                            <div className="text-2xl font-bold leading-none">
                                                {blog.date.day}
                                            </div>
                                            <div className="text-sm font-medium mt-1">
                                                {blog.date.month}
                                            </div>
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl md:text-2xl font-bold text-[#003C43] mb-4 group-hover:text-[#245953] transition-colors duration-300 line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4">
                                            {blog.excerpt}
                                        </p>

                                        {/* Read More */}
                                        <div className="mt-6 flex items-center gap-2 text-[#003C43] font-semibold group-hover:text-[#245953] group-hover:gap-4 transition-all duration-300">
                                            <span>Read More</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;