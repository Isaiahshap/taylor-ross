import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaTrophy, FaChartLine } from 'react-icons/fa';

interface ResultsContentProps {
  title: string;
  content: string[];
  inView: boolean;
}

const ResultsContent: React.FC<ResultsContentProps> = ({ title, content, inView }) => {
  const highlights = [
    { icon: FaTrophy, value: "$500M+", label: "Total Recovered" },
    { icon: FaGavel, value: "98%", label: "Success Rate" },
    { icon: FaBalanceScale, value: "5,000+", label: "Cases Won" },
    { icon: FaChartLine, value: "20+", label: "Years Experience" },
  ];

  return (
    <section className="relative py-24 bg-black">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          {/* Enhanced Title Section */}
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <FaBalanceScale className="text-law-red text-5xl" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-display text-white uppercase mb-6">
              {title} <span className="text-law-red">Overview</span>
            </h2>
            <div className="w-24 h-1 bg-law-red mb-8" />
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <highlight.icon className="text-4xl text-law-red mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {highlight.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/60">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Paragraphs with Single Animated Line */}
          <div className="relative space-y-8">
            {/* Single animated line for entire content */}
            <div className="absolute left-0 top-0 w-1 h-full">
              <motion.div 
                className="h-full w-full bg-law-red/20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: 'top' }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-law-red"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  style={{ transformOrigin: 'top' }}
                />
              </motion.div>
            </div>

            {/* Content paragraphs */}
            {content.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4 }}
                className="pl-6"
              >
                <p className="text-white/80 text-lg leading-relaxed">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsContent; 