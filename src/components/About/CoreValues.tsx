import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaHandshake, FaHeart, FaLightbulb } from 'react-icons/fa';

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
  return (
    <section className="relative py-24 bg-law-red">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display uppercase text-black mb-6">
            Our Core <span className="text-white">Values</span>
          </h2>
          <p className="text-black/80 text-xl max-w-3xl mx-auto font-body">
            These principles guide everything we do in our pursuit of justice for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-black min-h-[280px] p-8 flex flex-col items-center text-center">
                <value.icon className="text-law-red text-5xl mb-6 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-2xl font-display text-white mb-4 tracking-wider">
                  {value.title}
                </h3>
                <p className="text-white/60 font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues; 