import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar';
import ResultsHero from '../components/Results/ResultsHero';
import VictoryCard from '../components/Results/VictoryCard';
import StatsCard from '../components/Results/StatsCard';
import CaseEvaluation from '../components/CaseEvaluation/CaseEvaluation';

const Results: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Total Recovered", value: "$500M+" },
    { label: "Cases Won", value: "5,000+" },
    { label: "Success Rate", value: "98%" }
  ];

  const majorVictories = [
    { amount: "$15.5M", type: "Medical Malpractice", desc: "Surgical error resulting in brain damage" },
    { amount: "$8.2M", type: "Auto Accident", desc: "Multi-vehicle collision with severe injuries" },
    { amount: "$12.1M", type: "Wrongful Death", desc: "Construction site negligence" },
    { amount: "$9.8M", type: "Workplace Injury", desc: "Construction site accident compensation" },
    { amount: "$4.2M", type: "Slip & Fall", desc: "Premises liability settlement" },
    { amount: "$11.3M", type: "Product Liability", desc: "Defective product injury verdict" }
  ];

  const yearlyStats = [
    { label: "2023 Recoveries", value: "$85M+" },
    { label: "Average Settlement", value: "$1.2M" },
    { label: "Trials Won", value: "95%" },
    { label: "Cases Settled", value: "850+" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <ResultsHero
          title="Our"
          subtitle="Results"
          description="A proven track record of securing life-changing compensation for our clients through aggressive representation and unwavering dedication."
          stats={heroStats}
          inView={inView}
        />

        {/* Major Victories Section */}
        <section className="relative py-24 bg-law-red" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.h2 
              className="text-4xl md:text-5xl font-display text-black uppercase mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Notable <span className="text-white">Victories</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {majorVictories.map((victory, index) => (
                <VictoryCard
                  key={victory.type}
                  {...victory}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Yearly Stats Section */}
        <section className="relative py-24 bg-black">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.h2 
              className="text-4xl md:text-5xl font-display text-white uppercase mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              2023 <span className="text-law-red">Performance</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {yearlyStats.map((stat, index) => (
                <StatsCard
                  key={stat.label}
                  {...stat}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default Results; 