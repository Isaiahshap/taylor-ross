import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBalanceScale, FaDollarSign, FaHandshake, FaTrophy } from 'react-icons/fa';

const features = [
  {
    icon: FaBalanceScale,
    title: "AGGRESSIVE REPRESENTATION",
    description: "Our attorneys fight relentlessly to maximize your compensation and protect your rights."
  },
  {
    icon: FaDollarSign,
    title: "NO WIN, NO FEE",
    description: "You pay nothing unless we win your case. We take all the financial risk."
  },
  {
    icon: FaHandshake,
    title: "24/7 AVAILABILITY",
    description: "Direct access to your legal team whenever you need us. We're always here for you."
  },
  {
    icon: FaTrophy,
    title: "$100M+ RECOVERED",
    description: "Proven track record of securing life-changing settlements and verdicts for our clients."
  }
];

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-law-dark">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      
      <div className="relative container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl md:text-8xl font-display font-bold uppercase text-white mb-6">
            Why Choose <span className="text-law-red">Our Firm</span>
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
            When your future is at stake after an injury, you need attorneys who will fight 
            aggressively for every dollar you deserve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="relative bg-black h-full p-8 border-t-4 border-law-red hover:border-t-8 transition-all duration-500">
                <div className="relative z-10">
                  <feature.icon className="text-law-red text-5xl mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-display text-white mb-4 tracking-wider">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-law-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-block group relative overflow-hidden bg-law-red text-white px-16 py-5 text-xl font-display uppercase tracking-wider"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Free Case Review
            </span>
            <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 