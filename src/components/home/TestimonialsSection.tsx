import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      category: 'Depression',
      date: { day: '27', month: 'Mar' },
      title: 'The Role of Self-Care in Reducing Stress Levels',
      excerpt:
        'Participants learn to identify stress triggers and replace negative responses with practical, mindful strategies...',
      image: '/blog1.png',
      link: '/blog/self-care-stress'
    },
    {
      id: 2,
      category: 'Anxiety',
      date: { day: '17', month: 'Feb' },
      title: 'Simple Steps to Build Emotional Resilience Daily',
      excerpt:
        'This group provides a compassionate and confidential environment where individuals can openly discuss their fears...',
      image: '/blog2.png',
      link: '/blog/emotional-resilience'
    },
    {
      id: 3,
      category: 'Wellness',
      date: { day: '06', month: 'Jan' },
      title: 'Signs You Might Need Professional Mental Health Support',
      excerpt:
        'Through guided conversations and shared stories, members are encouraged to reconnect with themselves and others...',
      image: '/blog3.png',
      link: '/blog/mental-health-support'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#408E91]/10 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-16">
          <div>
            <span className="text-[#003C43] text-sm md:text-base font-semibold uppercase tracking-wider mb-4 block">
              NEWSLETTER
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003C43]">
              Read Our Latest Blog &<br />Article
            </h2>
          </div>

          {/* View All Button */}
          <Link
            to="/blog"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-[#003C43] hover:bg-[#245953] text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            All Blog & Article
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Blog Cards */}
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
  );
}
