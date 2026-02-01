import React from 'react';
import { Calendar, User, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/AnimatedSection';

const BlogPostDetail = () => {
    const recentPosts = [
        '5 Tips for Managing Stress Effectively',
        'The Importance of Self-Care in Mental Health',
        'Understanding Anxiety Disorders: Symptoms and Treatments',
        'How to Build Resilience in Challenging Times'
    ];

    const categories = [
        'Mental Health',
        'Self-Care',
        'Stress Management',
        'Work-Life Balance'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Open+Sans:wght@400;500;600;700&display=swap');
        
        .blog-detail-content {
          font-family: 'Open Sans', sans-serif;
        }

        .blog-detail-title {
          font-family: 'Merriweather', serif;
        }

        .sidebar-card {
          transition: all 0.3s ease;
        }

        .sidebar-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .recent-post-item {
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }

        .recent-post-item:hover {
          border-left-color: #003C43;
          padding-left: 0.75rem;
          background-color: #F3F4F6;
        }

        .category-item {
          transition: all 0.3s ease;
        }

        .category-item:hover {
          color: #003C43;
          padding-left: 0.5rem;
        }

        .category-item:hover .chevron {
          transform: translateX(4px);
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .social-share-btn {
          transition: all 0.3s ease;
        }

        .social-share-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .blog-image {
          transition: transform 0.3s ease;
        }

        .blog-image:hover {
          transform: scale(1.02);
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <AnimatedSection direction="left" delay={0.1}>
                        <div className="lg:col-span-2">
                            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="p-8 md:p-12">
                                    <h1 className="blog-detail-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        Understanding Mental Health: A Comprehensive Guide
                                    </h1>

                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-[#003C43]" />
                                            <span>12th March 2025</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-[#003C43]" />
                                            <span>By H. Jasmine</span>
                                        </div>
                                    </div>

                                    {/* Featured Image */}
                                    <div className="mb-8 rounded-xl overflow-hidden">
                                        <img
                                            src="/heroblog%20main.jpg"
                                            alt="Understanding Mental Health"
                                            className="blog-image w-full h-auto object-cover"
                                            style={{
                                                backgroundColor: '#E5E7EB',
                                                minHeight: '400px'
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="blog-detail-content prose prose-lg max-w-none">
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            It's natural to experience emotional ups and downs...
                                        </p>

                                        <p className="text-gray-700 leading-relaxed mb-8">
                                            One of the most common indicators...
                                        </p>

                                        {/* Two images */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="rounded-xl overflow-hidden">
                                                <img
                                                    src="/left%20detail.jpg"
                                                    className="blog-image w-full h-64 object-cover"
                                                />
                                            </div>
                                            <div className="rounded-xl overflow-hidden">
                                                <img
                                                    src="/right%20detail.jpg"
                                                    className="blog-image w-full h-64 object-cover"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Mental health issues can also manifest physically...
                                        </p>

                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Reaching out for mental health support isn't a sign of weakness...
                                        </p>
                                    </div>
                                </div>

                                {/* Social Share */}
                                <div className="px-8 md:px-12 pb-8">
                                    <div className="border-t pt-8">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-700 font-semibold text-lg">Share On :</span>
                                            <div className="flex gap-3">
                                                <button className="social-share-btn w-10 h-10 rounded-full bg-[#245953] hover:bg-[#003C43] flex items-center justify-center text-white">
                                                    <Facebook className="w-5 h-5" />
                                                </button>
                                                <button className="social-share-btn w-10 h-10 rounded-full bg-[#408E91] hover:bg-[#245953] flex items-center justify-center text-white">
                                                    <Twitter className="w-5 h-5" />
                                                </button>
                                                <button className="social-share-btn w-10 h-10 rounded-full bg-[#003C43] hover:bg-[#245953] flex items-center justify-center text-white">
                                                    <Linkedin className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </AnimatedSection>

                    {/* Sidebar */}
                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="lg:col-span-1 space-y-6">

                            {/* Recent Posts */}
                            <div className="sidebar-card bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
                                <div className="space-y-4">
                                    {recentPosts.map((post, index) => (
                                        <Link
                                            key={index}
                                            to={`/blog/${index}`}
                                            className="recent-post-item block py-3 px-4 rounded-lg text-gray-700 hover:text-gray-900 text-sm"
                                        >
                                            {post}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="sidebar-card bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Category</h3>
                                <div className="space-y-3">
                                    {categories.map((category, index) => (
                                        <Link
                                            key={index}
                                            to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="category-item flex items-center justify-between py-2 text-gray-700 hover:text-[#003C43] group"
                                        >
                                            <div className="flex items-center gap-2">
                                                <ChevronRight className="chevron w-4 h-4" />
                                                <span>{category}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="sidebar-card bg-gradient-to-br from-[#003C43] to-[#245953] rounded-2xl shadow-lg p-6 text-white">
                                <h3 className="text-xl font-bold mb-3">Subscribe to Newsletter</h3>
                                <p className="text-gray-200 text-sm mb-4">Get the latest updates and insights</p>

                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#408E91]"
                                    />
                                    <button className="w-full bg-white text-[#003C43] font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </div>
    );
};

export default BlogPostDetail;
