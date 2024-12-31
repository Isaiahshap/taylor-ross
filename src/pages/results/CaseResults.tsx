import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import VictoryCard from '../../components/Results/VictoryCard';
import PracticeAreaStats from '../../components/Results/PracticeAreaStats';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';
import ResultsContent from '../../components/Results/ResultsContent';

const CaseResults: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
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

  const caseResultsContent = [
    "At Taylor & Ross Law Firm, our track record of success spans over two decades, with more than $500 million recovered for our clients through settlements and verdicts. Our commitment to aggressive representation and thorough case preparation has established us as one of the premier personal injury law firms in the region.",
    
    "Our approach to case management combines meticulous attention to detail with strategic negotiation and litigation tactics. We understand that each case represents more than just numbers – it represents real people facing real challenges. This understanding drives our relentless pursuit of maximum compensation for our clients.",
    
    "Our success in medical malpractice cases, including our recent $15.5 million settlement for a surgical error victim, demonstrates our ability to handle complex litigation against large healthcare institutions. In auto accident cases, our team has consistently secured settlements exceeding industry averages, including an $8.2 million verdict in a multi-vehicle collision case.",
    
    "Workplace injury cases form a significant portion of our practice, with over $75 million recovered for construction site accidents alone. Our expertise in navigating workers' compensation laws while pursuing third-party claims has resulted in numerous multi-million dollar recoveries for our clients.",
    
    "Product liability cases showcase our ability to take on major manufacturers, with our $11.3 million verdict against a medical device manufacturer setting a precedent for similar cases nationwide. Our success in these complex cases stems from our extensive network of expert witnesses and our thorough understanding of product liability law.",
    
    "We take pride in maintaining a 98% success rate across all practice areas, with an average settlement time of 8.5 months. This efficiency in case resolution, combined with our track record of substantial recoveries, has earned us recognition from both peers and clients alike."
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
          inView={true}
        />

        <ResultsContent
          title="Case Results"
          content={caseResultsContent}
          inView={true}
        />

        {/* Major Victories Section */}
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
              Notable <span className="text-black">Victories</span>
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