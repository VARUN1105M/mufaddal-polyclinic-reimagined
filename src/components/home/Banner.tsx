import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  breadcrumbs = [{ label: 'Homepage', path: '/' }],
  backgroundImage = '/Banner Section (1).png',
}) => {
  return (
    <section className="relative h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay Gradient using PRIMARY → SECONDARY → NEUTRAL */}
        <div className="absolute inset-0 bg-gradient-to-br 
          from-[#003C43]/80 
          via-[#245953]/70 
          to-[#408E91]/60">
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center text-white/90">
          <Link
            to="/"
            className="text-base md:text-lg font-medium hover:text-white transition-colors"
          >
            Homepage
          </Link>
          <span className="mx-2 text-white/50 text-xl">/</span>
          <span className="text-base md:text-lg font-semibold text-white">
            {title}
          </span>
        </nav>
      </div>

    </section>
  );
};

export default PageBanner;
