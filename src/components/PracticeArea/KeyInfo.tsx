import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface KeyInfoProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
}

const KeyInfo: React.FC<KeyInfoProps> = ({ title, description, items }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display uppercase text-white mb-6">
            {title}
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-law-red/5 hover:bg-law-red/10 transition-colors duration-300 p-8 border-l-4 border-law-red"
            >
              <h3 className="text-2xl font-display text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/70 font-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyInfo; 