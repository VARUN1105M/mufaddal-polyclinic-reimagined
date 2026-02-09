import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) => {
  const aosAnimation = {
    up: 'fade-up',
    down: 'fade-down',
    left: 'fade-right',
    right: 'fade-left',
    fade: 'fade',
    scale: 'zoom-in',
  };

  return (
    <div
      className={className}
      data-aos={aosAnimation[direction]}
      data-aos-delay={delay * 1000}
      data-aos-duration="800"
      data-aos-once="true"
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
