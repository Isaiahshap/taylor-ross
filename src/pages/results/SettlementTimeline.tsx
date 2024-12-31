import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaClock, FaBalanceScale, FaGavel, FaChartLine } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import VictoryCard from '../../components/Results/VictoryCard';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';
import ResultsContent from '../../components/Results/ResultsContent';
import { motion } from 'framer-motion';

const SettlementTimeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Average Settlement Time", value: "8.5 Months" },
    { label: "Cases Settled", value: "5,000+" },
    { label: "Success Rate", value: "98%" }
  ];

  const timelineStats = [
    { label: "Initial Response", value: "24-48 Hrs" },
    { label: "Medical Review", value: "4-6 Weeks" },
    { label: "Negotiation Phase", value: "2-3 Months" },
    { label: "Average Resolution", value: "8.5 Months" }
  ];

  const settlementMilestones = [
    {
      title: "Initial Case Evaluation",
      timeframe: "24-48 Hours",
      description: "Rapid response and evidence preservation",
      stats: { cases: "100%", response: "24 Hrs" }
    },
    {
      title: "Medical Documentation",
      timeframe: "4-6 Weeks",
      description: "Expert medical evaluation and documentation",
      stats: { reviews: "500+", experts: "50+" }
    },
    {
      title: "Settlement Negotiation",
      timeframe: "2-3 Months",
      description: "Strategic negotiation with insurance companies",
      stats: { success: "92%", time: "90 Days" }
    },
    {
      title: "Case Resolution",
      timeframe: "6-8 Months",
      description: "Final settlement and disbursement",
      stats: { average: "8.5 Months", rate: "98%" }
    }
  ];

  const settlementContent = [
    "At Taylor & Ross Law Firm, our strategic approach to case management has resulted in an industry-leading average settlement time of 8.5 months, while still securing maximum compensation for our clients. Our efficient yet thorough process combines aggressive negotiation with meticulous case preparation.",

    "Our initial case evaluation phase, typically completed within 48 hours, involves comprehensive evidence gathering and immediate investigation. This rapid response has proven crucial in preserving essential evidence and establishing strong foundations for our cases.",

    "During the medical documentation phase, we coordinate with healthcare providers to ensure thorough documentation of injuries and future care needs. Our network of medical experts expedites this process, typically completing evaluations within 4-6 weeks of engagement.",

    "Our negotiation phase begins with a detailed demand package that includes all evidence, expert opinions, and comprehensive damages calculations. This thorough preparation often leads to successful settlements within 6-8 months, significantly faster than the industry average of 12-18 months.",

    "For cases requiring litigation, our trial-ready approach often accelerates the settlement process. Our record of courtroom success, including our recent $15.5 million medical malpractice verdict, motivates defendants to offer fair settlements rather than face us in court.",

    "Throughout the process, our use of advanced case management technology and dedicated legal teams ensures efficient handling while maintaining our 98% success rate. This combination of speed and success has established us as leaders in personal injury litigation."
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <ResultsHero
          title="Settlement"
          subtitle="Timeline"
          description="Experience our efficient and proven approach to securing maximum compensation in record time."
          stats={heroStats}
          inView={inView}
        />

        <ResultsContent
          title="Settlement Process"
          content={settlementContent}
          inView={true}
        />

        {/* Timeline Milestones */}
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

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Settlement <span className="text-black">Milestones</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {settlementMilestones.map((milestone, index) => (
                <VictoryCard
                  key={milestone.title}
                  amount={milestone.timeframe}
                  type={milestone.title}
                  desc={milestone.description}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Stats */}
        <section className="relative py-24 bg-black">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Timeline <span className="text-law-red">Statistics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineStats.map((stat, index) => (
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

export default SettlementTimeline; 