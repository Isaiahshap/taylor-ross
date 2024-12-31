import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import VictoryCard from '../../components/Results/VictoryCard';
import PracticeAreaStats from '../../components/Results/PracticeAreaStats';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

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
    { label: "Million+ Settlements", value: "100+" },
    { label: "Trials Won", value: "95%" },
    { label: "Avg. Settlement", value: "$1.2M" },
    { label: "Record Victory", value: "$15.5M" }
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
        <section className="relative py-24 bg-law-red" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-black uppercase mb-12">
              Recent <span className="text-white">Victories</span>
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
        <section className="relative py-24 bg-law-red">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-black uppercase mb-12">
              Victory <span className="text-white">Metrics</span>
            </h2>
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