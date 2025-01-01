import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const milestones = [
  {
    year: "1998",
    title: "Firm Founded",
    description: "Established with a commitment to fighting for injury victims' rights.",
    details: "Initial focus on personal injury and medical malpractice cases. First office opened in downtown with a team of 3 attorneys. First year recovered over $2M for clients."
  },
  {
    year: "2002",
    title: "First Major Victory",
    description: "Secured $5.2M verdict in landmark product liability case",
    details: "Expanded practice to include wrongful death cases. Established dedicated medical malpractice division. Built network of medical experts and specialists."
  },
  {
    year: "2005",
    title: "Strategic Expansion",
    description: "Opened additional offices to serve more communities across the state.",
    details: "Added specialized auto accident and truck accident divisions. Reached $50M in total client recoveries. Grew to team of 15 attorneys and 40 support staff."
  },
  {
    year: "2008",
    title: "Innovation in Practice",
    description: "Pioneered use of accident reconstruction technology",
    details: "Established rapid response investigation team. Launched 24/7 client support system. Reached milestone of 1,000 successful cases."
  },
  {
    year: "2012",
    title: "Record Verdict",
    description: "$15.5M medical malpractice verdict sets state record.",
    details: "Featured in national legal publications. Established dedicated catastrophic injury division. Total recoveries surpass $200M."
  },
  {
    year: "2015",
    title: "Industry Leadership",
    description: "Named to Super Lawyers Top 100 list",
    details: "Expanded motorcycle accident practice. Launched specialized brain injury division. Reached 2,500 successful cases."
  },
  {
    year: "2018",
    title: "20th Anniversary",
    description: "Celebrated two decades of fighting for justice with over $300M recovered.",
    details: "Established workplace injury specialty division. 98% success rate across all practice areas. Expanded to 25 attorneys and 75 support staff."
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Implemented advanced case management technology",
    details: "Launched virtual consultation capabilities. Expanded medical expert network to 250+ specialists. Average settlement time reduced to 8.5 months."
  },
  {
    year: "2023",
    title: "Today's Achievement",
    description: "Leading personal injury firm with over $500M recovered for clients.",
    details: "5,000+ successful cases across all practice areas. Team of 30+ attorneys and 100+ support staff. Multiple record-setting verdicts across practice areas."
  },
  {
    year: "2024",
    title: "Looking Forward",
    description: "Continuing our commitment to excellence and innovation",
    details: "Continuing expansion of practice areas. Investment in cutting-edge legal technology. Enhanced client support systems."
  }
];

const FirmHistory: React.FC = () => {
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
            Our <span className="text-white">Journey</span>
          </h2>
          <p className="text-black/80 text-lg sm:text-xl max-w-3xl mx-auto font-body">
            25 years of fighting for justice and securing life-changing results for our clients.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Always on left */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-black/20" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start ml-4 sm:ml-8"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-4 sm:-left-8 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 mt-3" />
                
                {/* Content Box */}
                <div className="pl-8 sm:pl-12 w-full sm:w-[calc(100%-2rem)]">
                  <div className="max-w-2xl">
                    <span className="text-3xl sm:text-4xl font-display text-black mb-2 sm:mb-4 block">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-black/80 font-body mb-3 text-base sm:text-lg">
                      {milestone.description}
                    </p>
                    <p className="text-sm sm:text-base text-black/70">
                      {milestone.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-black/10 rounded-lg p-6 text-center">
            <div className="text-3xl sm:text-4xl font-display text-black mb-2">$500M+</div>
            <div className="text-white font-body">Total Recovered</div>
          </div>
          <div className="bg-black/10 rounded-lg p-6 text-center">
            <div className="text-3xl sm:text-4xl font-display text-black mb-2">5,000+</div>
            <div className="text-white font-body">Cases Won</div>
          </div>
          <div className="bg-black/10 rounded-lg p-6 text-center sm:col-span-2 lg:col-span-1">
            <div className="text-3xl sm:text-4xl font-display text-black mb-2">98%</div>
            <div className="text-white font-body">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirmHistory; 