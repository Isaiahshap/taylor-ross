import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHandshake, FaBalanceScale, FaGavel, FaFileContract, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const SettlementTimeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Avg. Settlement Time", value: "8.5 Months" },
    { label: "Success Rate", value: "98%" },
    { label: "Cases Settled", value: "5,000+" }
  ];

  const settlementPhases = [
    {
      phase: "Initial Consultation",
      duration: "1-2 Days",
      description: "Comprehensive case evaluation and strategy development with our expert legal team.",
      icon: FaHandshake
    },
    {
      phase: "Case Investigation",
      duration: "2-4 Weeks",
      description: "Thorough evidence gathering, witness interviews, and expert consultations.",
      icon: FaBalanceScale
    },
    {
      phase: "Demand & Negotiation",
      duration: "2-3 Months",
      description: "Strategic demand preparation, settlement strategy development, and aggressive settlement negotiations.",
      icon: FaGavel
    },
    {
      phase: "Settlement or Litigation",
      duration: "4-6 Months",
      description: "Either finalizing settlement terms or proceeding with litigation if necessary.",
      icon: FaFileContract
    }
  ];

  const processStats = [
    { label: "Avg. Settlement Time", value: "8.5 Months" },
    { label: "Cases Settled Early", value: "85%" },
    { label: "Litigation Success", value: "96%" },
    { label: "Client Satisfaction", value: "4.9/5" }
  ];

  const timelineMetrics = [
    { label: "Initial Response", value: "24 Hours" },
    { label: "Case Evaluation", value: "48 Hours" },
    { label: "Strategy Development", value: "1 Week" },
    { label: "First Offer", value: "30 Days" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <ResultsHero
          title="Settlement"
          subtitle="Timeline"
          description="Understanding our proven approach to maximizing compensation through strategic case management and aggressive representation."
          stats={heroStats}
          inView={inView}
        />

        {/* Settlement Process */}
        <section className="relative py-24 bg-law-red" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-black uppercase mb-12">
              Settlement <span className="text-white">Process</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {settlementPhases.map((phase, index) => (
                <div 
                  key={phase.phase} 
                  className="bg-black p-8 group hover:bg-black/90 transition-all duration-500 border-l-8 border-law-red hover:border-l-[24px] relative overflow-hidden"
                >
                  {/* Background Gradient Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-law-red/0 via-law-red/5 to-law-red/0 group-hover:translate-x-full duration-1000 transition-transform ease-in-out" />
                  
                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon with enhanced animation */}
                    <div className="mb-6 text-law-red transform-gpu group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out">
                      <phase.icon className="text-6xl group-hover:text-law-red transition-colors duration-500" />
                    </div>
                    
                    {/* Phase Title and Duration */}
                    <div className="flex justify-between items-center mb-4 transform-gpu group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      <h3 className="text-2xl font-display text-white group-hover:text-law-red transition-colors duration-500">
                        {phase.phase}
                      </h3>
                      <span className="text-law-red font-display bg-black/50 px-3 py-1 rounded group-hover:bg-law-red group-hover:text-white transition-all duration-500">
                        {phase.duration}
                      </span>
                    </div>
                    
                    {/* Description with fade-in effect */}
                    <p className="text-white/80 mb-6 transform-gpu group-hover:translate-y-[-2px] transition-all duration-500">
                      {phase.description}
                    </p>
                    
                    {/* Animated underline */}
                    <div className="h-1 bg-law-red/50 group-hover:bg-law-red transition-all duration-500">
                      <div className="h-full w-0 group-hover:w-full bg-law-red transition-all duration-700 ease-out" />
                    </div>
                    
                    {/* Phase number indicator */}
                    <div className="absolute top-4 right-4 text-4xl font-display text-law-red/10 group-hover:text-law-red/20 transition-colors duration-500">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Metrics */}
        <section className="relative py-24 bg-black">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Process <span className="text-law-red">Metrics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processStats.map((stat, index) => (
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

        {/* Timeline Metrics */}
        <section className="relative py-24 bg-law-red">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-black uppercase mb-12">
              Timeline <span className="text-white">Benchmarks</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineMetrics.map((metric, index) => (
                <StatsCard
                  key={metric.label}
                  {...metric}
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

export default SettlementTimeline; 