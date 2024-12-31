import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import VictoryCard from '../../components/Results/VictoryCard';
import PracticeAreaStats from '../../components/Results/PracticeAreaStats';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const NotableVictories: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Total Recovered", value: "$500M+" },
    { label: "Million+ Cases", value: "100+" },
    { label: "Success Rate", value: "98%" }
  ];

  const recentVictories = [
    { amount: "$15.5M", type: "Medical Malpractice", desc: "Surgical error resulting in brain damage", date: "2023" },
    { amount: "$12.1M", type: "Wrongful Death", desc: "Construction site negligence", date: "2023" },
    { amount: "$9.8M", type: "Workplace Injury", desc: "Industrial accident compensation", date: "2023" },
    { amount: "$8.2M", type: "Auto Accident", desc: "Multi-vehicle collision with severe injuries", date: "2023" },
    { amount: "$11.3M", type: "Product Liability", desc: "Defective medical device", date: "2023" },
    { amount: "$7.5M", type: "Premises Liability", desc: "Hotel security negligence", date: "2023" }
  ];

  const practiceAreaHighlights = {
    "Medical Malpractice": { highest: "$15.5M", total: "25+" },
    "Wrongful Death": { highest: "$12.1M", total: "15+" },
    "Auto Accidents": { highest: "$8.2M", total: "30+" },
    "Product Liability": { highest: "$11.3M", total: "20+" }
  };

  const victoryStats = [
    { label: "Million+ Settlements", value: "250+" },
    { label: "Trials Won", value: "98%" }, 
    { label: "Avg. Settlement", value: "$2.5M" },
    { label: "Record Victory", value: "$25.5M" },
    { label: "Total Recovered", value: "$750M+" },
    { label: "Cases Won", value: "5,000+" },
    { label: "Client Satisfaction", value: "4.9/5" },
    { label: "Referral Rate", value: "92%" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <ResultsHero
          title="Notable"
          subtitle="Victories"
          description="Our track record of securing landmark victories and record-breaking settlements demonstrates our commitment to maximizing compensation for our clients."
          stats={heroStats}
          inView={inView}
        />

        {/* Recent Victories Section */}
        <section className="relative py-24 bg-gradient-to-r from-[#E31837] via-[#8B0000] to-black" ref={ref}>
          {/* Background Pattern & Gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/pattern.png')] mix-blend-overlay opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
            
            {/* Full-width black edge gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Recent <span className="text-black">Victories</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentVictories.map((victory, index) => (
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

        {/* Practice Area Highlights Section */}
        <section className="relative py-24 bg-black">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Practice Area <span className="text-law-red">Highlights</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(practiceAreaHighlights).map(([area, stats], index) => (
                <PracticeAreaStats
                  key={area}
                  area={area}
                  total={stats.highest}
                  cases={stats.total}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Victory Stats Section */}
        <section className="relative py-24 bg-gradient-to-b from-black via-[#8B0000] to-[#E31837]">
          {/* Background Pattern & Gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/pattern.png')] mix-blend-overlay opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
            
            {/* Full-width black edge gradients */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#E31837] to-transparent" />
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <FaTrophy className="text-law-red text-5xl" />
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-display uppercase mb-6 flex flex-col items-center">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white relative inline-block"
                >
                  Victory
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 h-2 bg-law-red"
                  />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-black relative inline-block group"
                >
                  Metrics
                  <div className="absolute -inset-x-4 -inset-y-2 bg-law-red/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </motion.span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 0.8, delay: 1 }}
                className="h-1 bg-law-red"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {victoryStats.map((stat, index) => (
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

export default NotableVictories; 