import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaHandshake, FaHeart, FaLightbulb } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const values = [
  {
    icon: FaBalanceScale,
    title: "INTEGRITY",
    description: "We uphold the highest ethical standards in everything we do, ensuring transparency and honesty with our clients."
  },
  {
    icon: FaHandshake,
    title: "COMMITMENT",
    description: "Our dedication to client success drives us to go above and beyond in every case we handle."
  },
  {
    icon: FaHeart,
    title: "COMPASSION",
    description: "We understand the challenges our clients face and provide caring, personalized support throughout their journey."
  },
  {
    icon: FaLightbulb,
    title: "INNOVATION",
    description: "We leverage cutting-edge legal strategies and technology to maximize results for our clients."
  }
];

const CoreValues: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-law-red overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase text-black mb-6">
            Our Core <span className="text-white">Values</span>
          </h2>
          <p className="text-black/80 text-lg sm:text-xl max-w-3xl mx-auto font-body">
            These principles guide everything we do in our pursuit of justice for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-full"
            >
              <div className="relative bg-black p-8 flex flex-col items-center text-center h-full border-l-8 border-law-red hover:border-l-12 transition-all duration-300 overflow-hidden">
                {/* Background Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-law-red/0 via-law-red/5 to-law-red/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.8 + index * 0.1 }}
                    className="mb-6"
                  >
                    <value.icon className="text-law-red text-5xl group-hover:scale-125 transition-transform duration-300" />
                  </motion.div>

                  <h3 className="text-2xl font-display text-white mb-4 tracking-wider group-hover:text-law-red transition-colors duration-200">
                    {value.title}
                  </h3>
                  <p className="text-white/60 font-body leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-law-red/5 blur-3xl group-hover:bg-law-red/10 transition-all duration-700" />
                  <div className="w-12 h-0.5 bg-law-red mt-6 group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues; 