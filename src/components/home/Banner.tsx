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
        <nav className="flex items-center justify-center gap-2 text-white">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link
                to={crumb.path}
                className="text-base md:text-lg font-medium hover:text-white/80 transition-colors"
              >
                {crumb.label}
              </Link>

              {/* Only show slash if NOT last breadcrumb */}
              {index < breadcrumbs.length - 1 && (
                <span className="text-white/50">/</span>
              )}
            </div>
          ))}
        </nav>
      </div>

    </section>
  );
};

export default PageBanner;
