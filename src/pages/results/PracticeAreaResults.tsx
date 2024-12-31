import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCar, FaUserInjured, FaHospital, FaHardHat, FaBalanceScale, FaHeartbeat } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import VictoryCard from '../../components/Results/VictoryCard';
import PracticeAreaStats from '../../components/Results/PracticeAreaStats';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const PracticeAreaResults: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Practice Areas", value: "6+" },
    { label: "Total Recovered", value: "$500M+" },
    { label: "Success Rate", value: "98%" }
  ];

  const practiceAreas = [
    {
      icon: FaCar,
      title: "Auto Accidents",
      description: "Aggressive representation for victims of car, truck, and motorcycle accidents.",
      stats: { total: "$100M+", cases: "2,500+", avgSettlement: "$850K" }
    },
    {
      icon: FaHospital,
      title: "Medical Malpractice",
      description: "Holding negligent healthcare providers accountable for their mistakes.",
      stats: { total: "$150M+", cases: "500+", avgSettlement: "$2.1M" }
    },
    {
      icon: FaHardHat,
      title: "Workplace Injuries",
      description: "Protecting workers' rights and securing compensation for on-the-job injuries.",
      stats: { total: "$75M+", cases: "1,000+", avgSettlement: "$950K" }
    },
    {
      icon: FaUserInjured,
      title: "Slip & Fall",
      description: "Fighting for maximum compensation in premises liability cases.",
      stats: { total: "$50M+", cases: "750+", avgSettlement: "$725K" }
    },
    {
      icon: FaBalanceScale,
      title: "Wrongful Death",
      description: "Seeking justice and compensation for families who lost loved ones.",
      stats: { total: "$120M+", cases: "450+", avgSettlement: "$1.8M" }
    },
    {
      icon: FaHeartbeat,
      title: "Catastrophic Injuries",
      description: "Dedicated advocacy for life-changing injury victims and their families.",
      stats: { total: "$85M+", cases: "300+", avgSettlement: "$1.5M" }
    }
  ];

  const yearlyGrowth = [
    { label: "2023 Growth", value: "+25%" },
    { label: "New Cases", value: "850+" },
    { label: "Referral Rate", value: "92%" },
    { label: "Client Satisfaction", value: "4.9/5" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <ResultsHero
          title="Practice Area"
          subtitle="Results"
          description="Explore our track record of success across various practice areas, showcasing our expertise and dedication to maximizing client compensation."
          stats={heroStats}
          inView={inView}
        />

        {/* Practice Areas Grid */}
        <section className="relative py-24 bg-law-red" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-black uppercase mb-12">
              Practice Area <span className="text-white">Expertise</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <VictoryCard
                  key={area.title}
                  amount={area.stats.total}
                  type={area.title}
                  desc={area.description}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Practice Area Stats */}
        <section className="relative py-24 bg-black">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Practice Area <span className="text-law-red">Statistics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practiceAreas.map((area, index) => (
                <PracticeAreaStats
                  key={area.title}
                  area={area.title}
                  total={area.stats.total}
                  cases={area.stats.cases}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Growth Stats */}
        <section className="relative py-24 bg-law-red">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-black uppercase mb-12">
              2023 <span className="text-white">Growth</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {yearlyGrowth.map((stat, index) => (
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

export default PracticeAreaResults; 