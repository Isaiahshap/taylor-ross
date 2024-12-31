import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import VictoryCard from '../../components/Results/VictoryCard';
import PracticeAreaStats from '../../components/Results/PracticeAreaStats';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const CaseResults: React.FC = () => {
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

  const practiceAreaResults = {
    "Medical Malpractice": { total: "$150M+", cases: "500+" },
    "Auto Accidents": { total: "$100M+", cases: "2,500+" },
    "Workplace Injuries": { total: "$75M+", cases: "1,000+" },
    "Slip & Fall": { total: "$50M+", cases: "750+" },
    "Product Liability": { total: "$85M+", cases: "300+" },
    "Wrongful Death": { total: "$120M+", cases: "450+" }
  };

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
          title="Case"
          subtitle="Results"
          description="Our track record of success speaks volumes. We've secured over $500 million in compensation for our clients through aggressive representation."
          stats={heroStats}
          inView={inView}
        />

        {/* Major Victories Section */}
        <section className="relative py-24 bg-law-red" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-black uppercase mb-12">
              Notable <span className="text-white">Victories</span>
            </h2>
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

        {/* Practice Area Results Section */}
        <section className="relative py-24 bg-black">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Practice Area <span className="text-law-red">Results</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(practiceAreaResults).map(([area, stats], index) => (
                <PracticeAreaStats
                  key={area}
                  area={area}
                  total={stats.total}
                  cases={stats.cases}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Yearly Performance Section */}
        <section className="relative py-24 bg-law-red">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-black uppercase mb-12">
              2023 <span className="text-white">Performance</span>
            </h2>
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

export default CaseResults; 