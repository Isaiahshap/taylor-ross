import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';

interface DetailedContentProps {
  title: string;
  description: string;
  image: string;
  bulletPoints: string[];
  statistics: {
    value: string;
    label: string;
  }[];
}

const DetailedContent: React.FC<DetailedContentProps> = ({
  title,
  description,
  image,
  bulletPoints,
  statistics
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-white mb-8">
              {title}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {description}
            </p>
            
            <ul className="space-y-4 mb-12">
              {bulletPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <FaCheck className="text-law-red mt-1.5 flex-shrink-0" />
                  <span className="text-white/70">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-display text-law-red mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-law-red/20 transform rotate-3" />
            <img
              src={image}
              alt={title}
              className="relative z-10 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailedContent; 