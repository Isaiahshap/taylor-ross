import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaClipboardCheck, FaChartLine, FaHandshake } from 'react-icons/fa';

interface TimelineStep {
  duration: string;
  phase: string;
  description: string;
  icon: React.ElementType;
}

const timelineSteps: TimelineStep[] = [
  {
    duration: "24 Hours",
    phase: "Initial Response",
    description: "Immediate case review and client contact",
    icon: FaClock
  },
  {
    duration: "48 Hours",
    phase: "Case Evaluation",
    description: "Detailed analysis and evidence gathering",
    icon: FaClipboardCheck
  },
  {
    duration: "1 Week",
    phase: "Strategy Development",
    description: "Comprehensive legal strategy formulation",
    icon: FaChartLine
  },
  {
    duration: "30 Days",
    phase: "First Offer",
    description: "Initial settlement negotiations begin",
    icon: FaHandshake
  }
];

interface TimelineBenchmarksProps {
  inView: boolean;
}

const TimelineBenchmarks: React.FC<TimelineBenchmarksProps> = ({ inView }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {timelineSteps.map((step, index) => (
        <motion.div
          key={step.phase}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative bg-black p-8 border-l-8 border-law-red hover:border-l-12 transition-all duration-300 overflow-hidden"
        >
          {/* Background Gradient Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-law-red/0 via-law-red/5 to-law-red/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.8 + index * 0.1 }}
              className="mb-6"
            >
              <step.icon className="text-law-red text-4xl group-hover:scale-125 transition-transform duration-200" />
            </motion.div>

            {/* Duration */}
            <div className="text-3xl font-display text-law-red mb-3 group-hover:scale-110 transition-transform duration-200">
              {step.duration}
            </div>

            {/* Phase */}
            <h3 className="text-xl font-display text-white mb-2 group-hover:text-law-red transition-colors duration-200">
              {step.phase}
            </h3>

            {/* Description */}
            <p className="text-white/70 font-body text-sm">
              {step.description}
            </p>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-law-red/5 blur-3xl group-hover:bg-law-red/10 transition-all duration-700" />
            <div className="w-12 h-0.5 bg-law-red mt-4 group-hover:w-20 transition-all duration-300" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TimelineBenchmarks; 