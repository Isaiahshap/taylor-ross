import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const milestones = [
  {
    year: "1998",
    title: "Firm Founded",
    description: "Established with a commitment to fighting for injury victims' rights."
  },
  {
    year: "2005",
    title: "Expansion",
    description: "Opened additional offices to serve more communities across the state."
  },
  {
    year: "2012",
    title: "Record Verdict",
    description: "$15.5M medical malpractice verdict sets state record."
  },
  {
    year: "2018",
    title: "20th Anniversary",
    description: "Celebrated two decades of fighting for justice with over $300M recovered."
  },
  {
    year: "2023",
    title: "Today",
    description: "Leading personal injury firm with over $500M recovered for clients."
  }
];

const FirmHistory: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-law-red" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display uppercase text-black mb-6">
            Our <span className="text-white">Journey</span>
          </h2>
          <p className="text-black/80 text-xl max-w-3xl mx-auto font-body">
            25 years of fighting for justice and securing life-changing results for our clients.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black/20" />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full" />
                
                {/* Content Box */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'
                }`}>
                  <span className="text-4xl font-display text-black mb-4 block">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-display text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-black/80 font-body">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirmHistory; 