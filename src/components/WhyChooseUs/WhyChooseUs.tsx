import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBalanceScale, FaDollarSign, FaHandshake, FaTrophy } from 'react-icons/fa';

const features = [
  {
    icon: FaBalanceScale,
    title: "AGGRESSIVE\nREPRESENTATION",
    description: "Our attorneys fight relentlessly to maximize your compensation and protect your rights."
  },
  {
    icon: FaDollarSign,
    title: "NO WIN,\nNO FEE",
    description: "You pay nothing unless we win your case. We take all the financial risk."
  },
  {
    icon: FaHandshake,
    title: "24/7\nAVAILABILITY",
    description: "Direct access to your legal team whenever you need us. We're always here for you."
  },
  {
    icon: FaTrophy,
    title: "$100M+\nRECOVERED",
    description: "Proven track record of securing life-changing settlements and verdicts for our clients."
  }
];

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold uppercase text-white mb-4 sm:mb-6">
            WHY CHOOSE <span className="text-law-red">OUR FIRM</span>
          </h2>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto font-body leading-relaxed px-4">
            When your future is at stake after an injury, you need attorneys who will fight 
            aggressively for every dollar you deserve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-black min-h-[320px] p-8 flex flex-col items-center text-center">
                <feature.icon className="text-law-red text-5xl mb-6" />
                <h3 className="text-2xl font-display text-white mb-4 tracking-wider whitespace-pre-line leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/60 font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 