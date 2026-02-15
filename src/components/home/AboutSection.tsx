import { Calendar, UserCheck, FlaskConical, UsersRound } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  {
    icon: Calendar,
    title: 'Yearly Women Care',
    description: 'Preventive yearly care focused on awareness, early attention, and long-term wellbeing.',
    bgColor: 'bg-[#408E91]',
    iconBg: 'bg-white/30'
  },
  {
    icon: UserCheck,
    title: 'Guided Women Support',
    description: 'Care and guidance delivered by trained women doctors and healthcare professionals.',
    bgColor: 'bg-[#245953]',
    iconBg: 'bg-white/30'
  },
  {
    icon: FlaskConical,
    title: 'Integrated Lab Support',
    description: 'In-house lab support for timely tests, early detection, and preventive monitoring.',
    bgColor: 'bg-[#003C43]',
    iconBg: 'bg-white/20'
  },
  {
    icon: UsersRound,
    title: 'Women-Led Care Team',
    description: 'Care environment fully supported by women staff, doctors, and care coordinators.',
    bgColor: 'bg-[#245953]',
    iconBg: 'bg-white/20'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 xl:py-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl 2xl:max-w-[1600px]">
        {/* Using the new responsive grid utility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {features.map((feature, index) => {
            const directions: ("up" | "down" | "left" | "right")[] = ["left", "down", "up", "right"];
            return (
              <AnimatedSection
                key={index}
                direction={directions[index]}
              >
                <motion.div
                  whileHover={{
                    y: -12,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className={`${feature.bgColor} rounded-2xl md:rounded-3xl p-6 lg:p-8 xl:p-10 text-white h-full flex flex-col justify-between cursor-pointer`}
                >
                  {/* Header: Icon + Title */}
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 ${feature.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[1.5rem] font-bold leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-[1rem] leading-relaxed mt-4 text-left">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;